// @flow

// Utilities
import React, { Component } from 'react';

// Components
import HistoryList from './HistoryList';

// Constants
import {
    API,
    unsplashClient,
    storage
} from './../constants';
import type { InputEvent } from 'customLibrary';

type PropsType = {
    onSearch: Function,
    clearQuery: string,
    loadMore: Function
}

type StateType = {
    inputValue: string,
    buttonDisabled: boolean,
    pageNumberToShow: number,
    historyListIsActive: boolean,
    historyList: Array<string>,
    suggestionList: Array<string>
}

export default class SearchForm extends Component<PropsType, StateType> {

    state = {
        inputValue: '',
        buttonDisabled: true,
        pageNumberToShow: 1,
        historyListIsActive: false,
        historyList: storage.local,
        suggestionList: []
    };

    componentWillReceiveProps(nextProps: PropsType) {
        nextProps.clearQuery === true && this.setState({
            inputValue: ''
        });
    }

    componentWillUpdate() {
        localStorage.setItem('list', JSON.stringify(this.state.historyList));
    }

    getNextSearchPage = () => {
        this.setState({ pageNumberToShow: this.state.pageNumberToShow += 1 });
        const nextSearchPage = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
        this.loadMoreItems(nextSearchPage);
    }

    getNextRandomPage = () => {
        const nextSearchPage = `${API.SEARCH_ITEMS_RANDOM}?count=12&client_id=${unsplashClient.ID}`;
        this.loadMoreItems(nextSearchPage);
    }

    searchImages = (path: string) => {
        this.props.onSearch(path);
        let filteredHistoryList = this.state.historyList;
        this.state.inputValue !== '' &&
            filteredHistoryList.unshift(this.state.inputValue);
        filteredHistoryList = [...new Set(filteredHistoryList)];

        this.setState({
            historyList: filteredHistoryList
        });
    }

    loadMoreItems = (path: string) => {
        this.props.loadMore(path);
    }

    handleEnterKeyPress = (event: KeyboardEvent, searchByInputValue: string) => {
        if (event.key === 13 && this.state.inputValue !== '') {
            this.searchImages(searchByInputValue);
        }
    }

    openHistoryList = () => {
        this.setState({
            historyListIsActive: !this.state.historyListIsActive
        });
    }

    searchByHistory = (historyItem: string) => {

        this.setState({ inputValue: historyItem }, () => {
            const nextSearchPage: string = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
            this.searchImages(nextSearchPage);
        });
    }

    updateInputValue = (event: InputEvent) => {
        const target = event.target;
        const currentTarget = event.currentTarget;

        const valueLength: number = target.value.trim().length;

        this.setState({
            inputValue: currentTarget.value
        });

        if (valueLength >= 3) {
            this.setState(() => ({ buttonDisabled: false }));
        } else if (!this.state.buttonDisabled) {
            this.setState(() => ({ buttonDisabled: true }));
        }
    }

    render() {
        const nextSearchPage = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
        const searchRandomImages = `${API.SEARCH_ITEMS_RANDOM}?count=12&client_id=${unsplashClient.ID}`;

        const { historyList } = this.state;

        const suggestItemToShow = historyList.filter(
            (item) => {
                return item.toLowerCase().includes(this.state.inputValue.toLowerCase());
            }
        );

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
                            this.handleEnterKeyPress(event, nextSearchPage);

                        }}
                    />
                    {
                        this.state.historyListIsActive &&
                        <HistoryList
                            suggestItemToShow={suggestItemToShow}
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
                            this.searchImages(nextSearchPage);
                        }}
                        disabled={this.state.buttonDisabled}
                    >
                        { this.state.buttonDisabled ? 'DISABLED' : 'FIND' }
                    </button>
                    <button
                        className="button blue"
                        onClick={event => {
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

