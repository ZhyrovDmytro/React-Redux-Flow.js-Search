import React, { Component } from 'react';

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
