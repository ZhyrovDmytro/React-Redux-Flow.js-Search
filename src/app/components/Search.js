// Utilities
import axios from 'axios';
import React, { Component } from 'react';
import requestServiceRedux from '../action-creators/requestService';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

    // getPath = (response) => {
    //     if (response instanceof Array) {
    //         console.log('array');
    //         let newImages;
    //         if (this.props.loadNextPage === true) {
    //             newImages = this.props.requestService.images.concat(response);
    //         } else {
    //             newImages = response.data;
    //             this.setState({ loadNextPage: false });
    //         }

    //         this.setState({
    //             images: newImages,
    //             searchRandom: true
    //         });
    //     } else if (response instanceof Object) {
    //         console.log('object');
    //         this.checkImagesTotalCount(response.data);
    //         let newImages;
    //         if (this.state.loadNextPage === true) {
    //             newImages = this.state.images.concat(response.data.results);
    //         } else {
    //             newImages = response.data.results;
    //             this.setState({ loadNextPage: false });
    //         }

    //         this.setState({
    //             images: newImages,
    //             searchRandom: false
    //         });
    //     }
    // }

    // resetResultList = () => {
    //     this.setState({ loadNextPage: false });
    // };

    // requestService = (path) => {
    //     this.toggleLoader();
    //     return axios.get(path)
    //         .then((response) => {
    //             this.getPath(response);

    //             this.checkMoreItems(response.data);
    //             this.toggleLoader();
    //         })
    //         .catch((error) => {
    //             console.error('FAILED!');
    //         });
    // }

    // checkImagesTotalCount = (images) => {
    //     images.total === 0 && this.setState({ noImages: false });
    // }

    // checkMoreItems = (response) => {
    //     if (this.state.images.length < response.total || response.total === undefined) {
    //         this.setState({
    //             existMoreItems: true
    //         });
    //     } else {
    //         this.setState({
    //             existMoreItems: false
    //         });
    //     }
    // }

    // loadMoreImages = () => {
    //     if (this.props.searchRandom === true) {
    //         this.resultList.getNextRandomPage();
    //     } else {
    //         this.resultList.getNextSearchPage();
    //     }
    //     this.setState({ loadNextPage: true });
    // }

    // toggleLoader = () => {
    //     this.props.requestService.isFetching && !this.props.requestService.isFetching;
    // }

    render() {
        const { isFetching, images } = this.props.requestService;
        const loader = isFetching && <Loader />;
        // const noImages = this.props.noImages === true &&
        //     (<div className="text-center mt-3">
        //         <p>No images to display :(</p>
        //     </div>);
        // const moreItemsButton = this.props.requestService.existMoreItems === true &&
        //                         <button
        //                             className="button"
        //                             onClick={this.loadMoreImages}
        //                         >
        //                             LOAD MORE
        //                         </button>;
        return (
            <div>
                <header className="header">
                    <SearchForm
                        ref={(c) => { this.resultList = c; }}
                        onSearch={this.props.requestServiceRedux}
                        // resetResultList={this.resetResultList}
                    />
                </header>
                <ResultList
                    images={images}
                />
                {loader}
                {/* {noImages} */}
                {/* <div className="text-right">
                    {moreItemsButton}
                </div> */}
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
        requestServiceRedux
    }
)(Search);
