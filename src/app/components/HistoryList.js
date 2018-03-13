import React, { Component } from 'react';

export default (props) => {
    const createHistoryItem = [...props.historyList].map((historyItem) => {
        return (
            <li
                key={`_${historyItem.id}${Math.random().toString(36).slice(-5)}`}
                className="history__item"
                onMouseDown={() => props.searchByHistory(historyItem)}
                role="menuitem"
            >
                <span>
                    { historyItem }
                </span>
            </li>
        );
    });

    return (
        <div className="history">
            <ul className="history__list">
                { createHistoryItem }
            </ul>
        </div>
    );
};
