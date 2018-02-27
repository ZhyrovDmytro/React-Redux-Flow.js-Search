import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import Masonry from 'masonry-layout';
import axios from 'axios';
import Button from './base/Button';

import {
    API,
    unsplashClient
} from './../constants';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            existMoreItems: false,
            searchRandom: false,
            loadNextPage: false
        };
    }

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
        return axios.get(path)
            .then((response) => {
                this.getPath(response);
                console.log(response);

                this.checkMoreItems(response.data);
            })
            .catch((error) => {
                console.error('FAILED!');
            });
    }

    checkMoreItems = (response) => {
        if (this.state.images.length < response.total) {
            this.setState({
                existMoreItems: true
            });
        } else {
            this.setState({
                existMoreItems: false
            });
        } if (response.total === undefined) {
            this.setState({ existMoreItems: true });
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

    render() {
        const { images } = this.state;
        return (
            <div>
                <headr className="header">
                    <SearchForm
                        ref={(c) => { this.resultList = c; }}
                        onSearch={this.requestService}
                        resetResultList={this.resetResultList}
                    />
                </headr>
                <ResultList images={images} />
                <div className="text-right">
                    {
                        this.state.existMoreItems ?
                            <button
                                className="button"
                                onClick={this.loadMoreImages}
                            >
                                LOAD MORE
                            </button> :
                            null
                    }
                </div>
            </div>
        );
    }
}
