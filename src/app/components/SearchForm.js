// Utilities
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import HistoryList from './HistoryList';

// Constants
import {
    API,
    unsplashClient,
    storage
} from './../constants';

export default class SearchForm extends Component {
    state = {
        inputValue: '',
        buttonDisabled: true,
        pageNumberToShow: 1,
        historyListIsActive: false,
        historyList: storage.local,
        suggestionList: []
    };


    componentWillUpdate() {
        localStorage.setItem('list', JSON.stringify(this.state.historyList));
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
        // let filteredHistoryList = this.state.historyList;
        // this.state.inputValue !== '' &&
        //     filteredHistoryList.unshift(this.state.inputValue);
        //     filteredHistoryList = [...new Set(filteredHistoryList)];

        // this.setState({
        //     historyList: filteredHistoryList
        // });
    }

    // resetResultList = () => {
    //     this.props.resetResultList();
    // }

    handleEnterKeyPress = (event, searchByInputValue) => {
        if (event.keyCode === 13 && this.state.inputValue !== '') {
            this.searchImages(searchByInputValue);
            // this.resetResultList();
        }
    }

    openHistoryList = () => {
        this.setState({
            historyListIsActive: !this.state.historyListIsActive
        });
    }

    searchByHistory = (historyItem) => {

        this.setState({ inputValue: historyItem }, () => {
            const nextSearchPage = `${API.SEARCH_ITEMS}?page=${this.state.pageNumberToShow}&per_page=12&query=${this.state.inputValue}&client_id=${unsplashClient.ID}`;
            // this.resetResultList();
            this.searchImages(nextSearchPage);
        });
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
                            // this.resetResultList();
                            this.searchImages(nextSearchPage);
                        }}
                        disabled={this.state.buttonDisabled}
                    >
                        { this.state.buttonDisabled ? 'DISABLED' : 'FIND' }
                    </button>
                    <button
                        className="button blue"
                        onClick={event => {
                            // this.resetResultList();
                            // this.setState({ inputValue: '' });
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

SearchForm.propTypes = {
    // resetResultList: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};
