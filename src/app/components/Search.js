// Utilities
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import findImages from '../action-creators/findImages';
import loadMore from '../action-creators/loadMore';

// Components
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import Loader from './base/Loader';

// Constants
import {
    API,
    unsplashClient
} from './../constants';

class Search extends Component {

    loadMoreImages = () => {
        if (this.props.requestService.loadRandomImages) {
            this.resultList.getNextRandomPage();
        } else {
            this.resultList.getNextSearchPage();
        }
    }

    render() {
        const { isFetching, images, existMoreItems, noImages } = this.props.requestService;
        const loader = isFetching && <Loader />;
        const noImagesToShow = noImages &&
            (<div className="text-center mt-3">
                <p>No images to display :(</p>
            </div>);
        const moreItemsButton = existMoreItems && (
            <button
                className="button"
                onClick={this.loadMoreImages}
            >
                LOAD MORE
            </button>
        );

        return (
            <div>
                <header className="header">
                    <SearchForm
                        ref={(c) => { this.resultList = c; }}
                        loadMore={this.props.loadMore}
                        onSearch={this.props.findImages}
                        clearQuery={this.props.requestService.loadRandomImages}
                    />
                </header>
                <ResultList
                    images={images}
                />
                {loader}
                {noImagesToShow}
                <div className="text-right mb-5">
                    {moreItemsButton}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(
    mapStateToProps,
    {
        findImages,
        loadMore
    }
)(Search);
