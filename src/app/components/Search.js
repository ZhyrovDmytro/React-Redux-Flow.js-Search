import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';
import axios from 'axios';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        };

        this.requestService = this.requestService.bind(this);
    }

    requestService = () => {
        return axios.get('https://api.unsplash.com/search/photos/?page=1&per_page=10&query=car&client_id=452c69632818336a2c6b341b066847cb873fd987fa1876c039f59b615bf3fb9b')
            .then((respond) => {
                console.log(respond.data.results);
                this.setState({ images: respond.data.results });
            });
    }

    render() {
        const { images } = this.state;
        return (
            <div>
                <headr className="header">
                    <SearchForm onSearch={this.requestService} />
                    <ResultList images={images} />
                </headr>
            </div>
        );
    }

}
