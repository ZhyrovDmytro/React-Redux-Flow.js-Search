import React, { Component } from 'react';

export default class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.updateInputValue = this.updateInputValue.bind(this);
        this.showInputValue = this.showInputValue.bind(this);
        this.state = { inputValue: '' };
    }

    updateInputValue = (event) => {
        this.setState({
            inputValue: event.currentTarget.value
        });
    }

    showInputValue = (e) => {
        this.props.onSearch(this.query.value);
    }

    render() {
        return (
            <div className="search">
                <div className="search__form">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="SEARCH..."
                        ref={input => (this.query = input)}
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                    />
                </div>
                <div className="search__buttons">
                    <button
                        className="saerch__find button"
                        onClick={() => this.showInputValue()}
                    >
                        FIND
                    </button>
                    <button
                        className="saerch__random button grey"
                        onClick={event => this.showRandom()}
                    >
                        RANDOM
                    </button>
                </div>
            </div>
        );
    }
}
