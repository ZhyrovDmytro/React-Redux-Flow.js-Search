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
            nextPage: 1
        };

        this.requestService = this.requestService.bind(this);
        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    requestService = (path) => {
        return axios.get(path)
            .then((respond) => {
                console.log(respond);
                if (respond.data instanceof Array) {
                    this.setState({ images: respond.data });
                } else if (respond.data instanceof Object) {
                    this.setState({ images: respond.data.results });
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
                loadMoreItems: !this.state.loadMoreItems
            });
        }
    }

    loadMoreItems = () => {
        const searchByInputValue = `${API.SEARCH_ITEMS}?page=2&per_page=12&query=car}&client_id=${unsplashClient.ID}`;
        this.refs.child.searchImages(searchByInputValue);
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
                        ref="child"
                        onSearch={this.requestService}
                    />
                </headr>
                <ResultList images={images} />
                <div className="text-right">
                    {
                        this.state.loadMoreItems ?
                            <button
                                className="button"
                                onClick={this.loadMoreItems}
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
