import React, { Component } from 'react';

import {
    API,
    unsplashClient
} from './../constants';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.updateInputValue = this.updateInputValue.bind(this);
        this.searchImages = this.searchImages.bind(this);

        this.state = {
            inputValue: ''
        };
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.currentTarget.value
        });
    }

    searchImages = (path, respons) => {
        this.props.onSearch(path);
    }

    render() {
        const searchByInputValue = `${API.SEARCH_ITEMS}?page=1&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
        const searchRandomImages = `${API.SEARCH_ITEMS_RANDOM}?count=12&client_id=${unsplashClient.ID}`;

        return (
            <div className="search">
                <div className="search__form">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="SEARCH..."
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                    />
                </div>
                <div className="search__buttons">
                    <button
                        className="saerch__find button"
                        onClick={() => this.searchImages(searchByInputValue)}
                    >
                        FIND
                    </button>
                    <button
                        className="saerch__random button grey"
                        onClick={event => this.searchImages(searchRandomImages)}
                    >
                        RANDOM
                    </button>
                </div>
            </div>
        );
    }
}
