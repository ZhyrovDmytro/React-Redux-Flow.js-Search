// @flow

// Utitlities
import React, { Component } from 'react';

// Components
import ItemInfo from './ItemInfo';
import ModalWindow from './ModalWindow';

type PropsType = {
    image: Object
}

type StateType = {
    isOpen: boolean
}

export default class Item extends Component<PropsType, StateType> {
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
