import React, { Component } from 'react';
import Item from './Item';
import Masonry from 'masonry-layout';

export default class ResultList extends Component {

    // componentDidMount() {
    //     this.generateGrid();
    // }

    componentDidUpdate() {
        this.generateGrid();
    }

    generateGrid = () => {
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
                    key={`_${image.id}${Math.random().toString(36).slice(-5)}`}
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
