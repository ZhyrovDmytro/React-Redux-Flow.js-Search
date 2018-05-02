import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import Masonry from 'masonry-layout';
import axios from 'axios';
import Loader from './base/Loader';

import {
    API,
    unsplashClient
} from './../constants';

export default class Search extends Component {
    state = {
        images: [],
        noImages: true,
        existMoreItems: false,
        searchRandom: false,
        loadNextPage: false,
        loaderIsActive: false
    };

    getPath = (response) => {
        if (response.data instanceof Array) {
            let newImages;
            if (this.state.loadNextPage === true) {
                newImages = this.state.images.concat(response.data);
            } else {
                newImages = response.data;
                this.setState({ loadNextPage: false });
            }

            this.setState({
                images: newImages,
                searchRandom: true
            });
        } else if (response.data instanceof Object) {
            this.checkImagesTotalCount(response.data);
            let newImages;
            if (this.state.loadNextPage === true) {
                newImages = this.state.images.concat(response.data.results);
            } else {
                newImages = response.data.results;
                this.setState({ loadNextPage: false });
            }

            this.setState({
                images: newImages,
                searchRandom: false
            });
        }
    }

    resetResultList = () => {
        this.setState({ loadNextPage: false });
    };

    requestService = (path) => {
        this.activateLoadre();
        return axios.get(path)
            .then((response) => {
                this.getPath(response);

                this.checkMoreItems(response.data);
                this.activateLoadre();
            })
            .catch((error) => {
                console.error('FAILED!');
            });
    }

    checkImagesTotalCount = (images) => {
        images.total === 0 && this.setState({ noImages: false });
    }

    checkMoreItems = (response) => {
        if (this.state.images.length < response.total || response.total === undefined) {
            this.setState({
                existMoreItems: true
            });
        } else {
            this.setState({
                existMoreItems: false
            });
        }
    }

    loadMoreImages = () => {
        if (this.state.searchRandom === true) {
            this.resultList.getNextRandomPage();
        } else {
            this.resultList.getNextSearchPage();
        }
        this.setState({ loadNextPage: true });
    }

    activateLoadre = () => {
        this.setState({
            loaderIsActive: !this.state.loaderIsActive
        });
    }

    render() {
        const { images } = this.state;
        const loader = this.state.loaderIsActive === true && <Loader />;
        const noImages = !this.state.noImages &&
                            <div className="text-center mt-3">
                                <p>No images to display :(</p>
                            </div>;
        const moreItemsButton = this.state.existMoreItems &&
                                <button
                                    className="button"
                                    onClick={this.loadMoreImages}
                                >
                                    LOAD MORE
                                </button>;
        return (
            <div>
                <header className="header">
                    <SearchForm
                        ref={(c) => { this.resultList = c; }}
                        onSearch={this.requestService}
                        resetResultList={this.resetResultList}
                    />
                </header>
                <ResultList
                    images={images}
                />
                {loader}
                {noImages}
                <div className="text-right">
                    {moreItemsButton}
                </div>
            </div>
        );
    }
}
