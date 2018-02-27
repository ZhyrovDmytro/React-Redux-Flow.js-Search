import React, { Component } from 'react';
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
        const modal = this.state.isOpen ? (
            <ModalWindow
                image={this.props.image}
                handleClickOutside={this.closeModal}
            />
        ) : null;
        return (
            <picture
                className="results__item"
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
