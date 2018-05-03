import React from 'react';
import PropTypes from 'prop-types';

const historyList = props => {
    const historyItemsToShow = props.suggestItemToShow.slice(0, 5);

    const createHistoryItem = historyItemsToShow.map((historyItem) => {
        return (
            <li
                key={`_${historyItem.id}${Math.random()}`}
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

historyList.propTypes = {
    suggestItemToShow: PropTypes.arrayOf(PropTypes.string).isRequired,
    searchByHistory: PropTypes.func.isRequired
};

export default historyList;
