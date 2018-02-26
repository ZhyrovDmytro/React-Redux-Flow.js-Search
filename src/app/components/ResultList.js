import React, { Component } from 'react';
import Item from './Item';
import ModalWindow from './ModalWindow';
import Masonry from 'masonry-layout';

export default class ResultList extends Component {

    componentDidMount() {
        this.imageLoaded();
    }

    componentDidUpdate() {
        this.imageLoaded();
    }

    imageLoaded = () => {
        setTimeout(() => {
            const grid = document.querySelector('.results');
            const gridLayout = new Masonry(grid, {
                itemSelector: '.results__item'
            });
        }, 500);
    }

    render() {
        const createItem = this.props.images.map((image) => {
            return (
                <figure
                    key={image.id}
                    className="results__wrapper"
                >
                    <Item image={image} />
                </figure>
            );
        });

        return (
            <div className="results">
                { createItem }
            </div>
        );
    }
}
