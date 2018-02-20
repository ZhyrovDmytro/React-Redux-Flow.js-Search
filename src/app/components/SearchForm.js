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
            <div className="saerch">
                <form className="search__form">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="search..."
                        ref={input => (this.query = input)}
                        value={this.state.inputValue}
                        onChange={event => this.updateInputValue(event)}
                    />
                </form>
                <p
                    className="search__text"
                >
                    { this.state.inputValue }
                </p>
                <button
                    className="saerch__find"
                    onClick={() => this.showInputValue()}
                >
                    find
                </button>
                <button
                    className="saerch__random"
                    onClick={event => this.showRandom()}
                >
                    random
                </button>
            </div>
        );
    }
}
