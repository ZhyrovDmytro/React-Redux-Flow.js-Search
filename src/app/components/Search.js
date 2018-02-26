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
            loadMoreItems: false,
            searchRandom: false
        };
    }

    requestService = (path) => {
        return axios.get(path)
            .then((response) => {

                const newImages = this.state.images.concat(response.data.results);

                console.log(response);
                if (response.data instanceof Array) {
                    this.setState({
                        images: response.data,
                        searchRandom: true
                    });
                } else if (response.data instanceof Object) {
                    this.setState({
                        images: newImages,
                        searchRandom: false
                    });
                }

                // setTimeout(() => {
                //     this.imageLoaded();
                // }, 500);

                this.checkMoreItems(response.data);
            })
            .catch((error) => {
                console.error('FAILED!');
            });
    }

    checkMoreItems = (response) => {
        if (this.state.images.length < response.total) {
            this.setState({
                loadMoreItems: true
            });
        } else {
            this.setState({
                loadMoreItems: false
            });
        } if (response.total === undefined) {
            this.setState({ loadMoreItems: true });
        }
    }

    loadMoreImages = () => {
        if (this.state.searchRandom === true) {
            this.resultList.getNextRandomPage();
        } else {
            this.resultList.getNextSearchPage();
        }
    }


    render() {
        const { images } = this.state;
        return (
            <div>
                <headr className="header">
                    <SearchForm
                        ref={(c) => { this.resultList = c; }}
                        onSearch={this.requestService}
                    />
                </headr>
                <ResultList images={images} />
                <div className="text-right">
                    {
                        this.state.loadMoreItems ?
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
