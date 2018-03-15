import React from 'react';

export default (props) => {
    const historyItemsToShow = [...props.historyList.slice(1).slice(-5)];
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
