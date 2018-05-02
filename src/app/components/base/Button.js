import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function button(props) {
    const buttonClass = props.className;
    const content = props.content;
    return (
        <button
            className={buttonClass}
            onClick={() => this.handleClick()}
        >
            {content}
        </button>
    );
}

button.propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};
