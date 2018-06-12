// @flow

import React from 'react';
import getRandomNumber from '../helpers/getRandomNumber';

type PropTypes = {
    suggestItemToShow: Array<string>,
    searchByHistory: Function
}

const historyList = (props: PropTypes) => {
    const historyItemsToShow = props.suggestItemToShow.slice(0, 5);

    const createHistoryItem = historyItemsToShow.map((historyItem) => {
        return (
            <li
                key={`_${getRandomNumber()}`}
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

export default historyList;
