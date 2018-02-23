import React, { Component } from 'react';

import {
    API,
    unsplashClient
} from './../constants';

const styles = {
    button: {
        backgroundColor: '#afafaf',
        transition: '.25s all',
        cursor: 'not-allowed'
    },
    buttonEnabled: {
        backgroundColor: 'green',
        cursor: 'pointer',
    }
};


export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.updateInputValue = this.updateInputValue.bind(this);
        this.searchImages = this.searchImages.bind(this);

        this.state = {
            inputValue: '',
            buttonDisabled: true
        };
    }

    updateInputValue = (event) => {
        const valueLength = event.target.value.length;


        this.setState({
            inputValue: event.currentTarget.value
        });

        if (valueLength >= 3) {
            this.setState(() => ({ buttonDisabled: false }));
        } else if (!this.state.buttonDisabled) {
            this.setState(() => ({ buttonDisabled: true }));
        }
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
                        className={
                            this.state.buttonDisabled ? 'button disabled' : 'button'
                        }
                        onClick={() => this.searchImages(searchByInputValue)}
                        disabled={this.state.buttonDisabled}
                    >
                        { this.state.buttonDisabled ? 'DISABLED' : 'FIND' }
                    </button>
                    <button
                        className="button blue"
                        onClick={event => this.searchImages(searchRandomImages)}
                    >
                        RANDOM
                    </button>
                </div>
            </div>
        );
    }
}
