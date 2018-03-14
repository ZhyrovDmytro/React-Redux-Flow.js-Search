import React, { Component } from 'react';

import HistoryList from './HistoryList';
import {
    API,
    unsplashClient
} from './../constants';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            buttonDisabled: true,
            pageNumberToShow: 1,
            historyListIsActive: false,
            historyList: []
        };
    }

    getNextSearchPage = () => {
        this.setState({ pageNumberToShow: this.state.pageNumberToShow += 1 });
        const nextSearchPage = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
        this.searchImages(nextSearchPage);
    }

    getNextRandomPage = () => {
        const nextSearchPage = `${API.SEARCH_ITEMS_RANDOM}?count=12&client_id=${unsplashClient.ID}`;
        this.searchImages(nextSearchPage);
    }

    searchImages = (path) => {
        this.props.onSearch(path);
        this.state.inputValue !== '' &&
            this.setState({
                historyList: [...this.state.historyList, this.state.inputValue]
            });
    }

    resetResultList = () => {
        this.props.resetResultList();
    }

    handleKeyPress = (event, searchByInputValue) => {
        if (event.keyCode === 13 && this.state.inputValue !== '') {
            this.searchImages(searchByInputValue);
            this.resetResultList();
        }
    }

    openHistoryList = () => {
        this.setState({
            historyListIsActive: !this.state.historyListIsActive
        });
    }

    searchByHistory = (historyItem) => {
        this.setState({
            inputValue: historyItem
        });

        const searchByHistoryItem = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${historyItem}&client_id=${unsplashClient.ID}`;

        this.searchImages(searchByHistoryItem);

    }

    updateInputValue = (event) => {
        const valueLength = event.target.value.trim().length;

        this.setState({
            inputValue: event.currentTarget.value
        });

        if (valueLength >= 3) {
            this.setState(() => ({ buttonDisabled: false }));
        } else if (!this.state.buttonDisabled) {
            this.setState(() => ({ buttonDisabled: true }));
        }
    }

    render() {
        const searchByInputValue = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
        const searchRandomImages = `${API.SEARCH_ITEMS_RANDOM}?count=12&client_id=${unsplashClient.ID}`;

        const { historyList } = this.state;
        return (
            <div className="search">
                <div className="search__form">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="SEARCH..."
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                        onFocus={this.openHistoryList}
                        onBlur={this.openHistoryList}
                        onKeyDown={event => {
                            this.handleKeyPress(event, searchByInputValue);

                        }}
                    />
                    {
                        this.state.historyListIsActive &&
                        <HistoryList
                            historyList={historyList}
                            searchByHistory={this.searchByHistory}
                        />
                    }
                </div>
                <div className="search__buttons">
                    <button
                        className={
                            this.state.buttonDisabled ? 'button disabled' : 'button'
                        }
                        onClick={() => {
                            this.resetResultList();
                            this.searchImages(searchByInputValue);
                        }}
                        disabled={this.state.buttonDisabled}
                    >
                        { this.state.buttonDisabled ? 'DISABLED' : 'FIND' }
                    </button>
                    <button
                        className="button blue"
                        onClick={event => {
                            this.resetResultList();
                            this.setState({ inputValue: '' });
                            this.searchImages(searchRandomImages);
                        }}
                    >
                        RANDOM
                    </button>
                </div>
            </div>
        );
    }
}
