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

        this.requestService = this.requestService.bind(this);
        this.loadMoreImages = this.loadMoreImages.bind(this);
    }

    requestService = (path) => {
        return axios.get(path)
            .then((respond) => {
                console.log(respond);
                if (respond.data instanceof Array) {
                    this.setState({
                        images: respond.data,
                        searchRandom: true
                    });
                } else if (respond.data instanceof Object) {
                    this.setState({
                        images: respond.data.results,
                        searchRandom: false
                    });
                }

                setTimeout(() => {
                    this.imageLoaded();
                }, 500);

                this.checkMoreItems(respond.data);
            })
            .catch((error) => {
                console.error('FAILED!');
            });
    }

    checkMoreItems = (respond) => {
        if (this.state.images.length < respond.total) {
            this.setState({
                loadMoreItems: true
            });
        } else {
            this.setState({
                loadMoreItems: false
            });
        } if (respond.total === undefined) {
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

    imageLoaded = () => {
        const grid = document.querySelector('.results');
        const gridLayout = new Masonry(grid, {
            itemSelector: '.results__item'
        });
    };

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
