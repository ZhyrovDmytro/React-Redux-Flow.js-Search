// Utitlities
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import ItemInfo from './ItemInfo';
import ModalWindow from './ModalWindow';

export default class Item extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({
            isOpen: true
        });
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        const modal = this.state.isOpen && (
            <ModalWindow
                image={this.props.image}
                handleClickOutside={this.closeModal}
            />
        );
        return (
            <picture
                className="js-results-item results__item"
                onClick={this.openModal}
            >
                <img
                    className="results__image"
                    src={this.props.image.urls.small}
                    alt=""
                />
                { modal }
                <ItemInfo info={this.props.image} />
            </picture>
        );
    }
}

Item.propTypes = {
    image: PropTypes.PropTypes.shape({
        urls: PropTypes.PropTypes.shape({
            small: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};
