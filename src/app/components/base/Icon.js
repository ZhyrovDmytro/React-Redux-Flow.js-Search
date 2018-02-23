import React, { Component } from 'react';
import { paths } from './../../constants';

export default function icon(props) {
    const name = props.name;
    const iconClass = props.className;

    return (
        <svg
            className={iconClass}
        >
            <use xlinkHref={`${paths.GLOBAL}/gfx/svg/sprites/icons.svg#${name}`} />
        </svg>
    );
}
