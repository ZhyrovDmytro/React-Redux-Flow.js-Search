import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import Masonry from 'masonry-layout';
import axios from 'axios';

import {
    API,
    unsplashClient
} from './../constants';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };

        this.requestService = this.requestService.bind(this);
    }

    requestService = (query) => {
        return axios.get(`${API.SEARCH_ITEMS}?page=1&per_page=10&query=${query}&client_id=${unsplashClient.ID}`)
            .then((respond) => {
                this.setState({ images: respond.data.results });
                setTimeout(() => {
                    this.imageLoaded();
                }, 100);
            })
            .catch((error) => {
                console.error('FAILED');
            });
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
                    <SearchForm onSearch={this.requestService} />
                </headr>
                <ResultList images={images} />
            </div>

        );
    }

}
