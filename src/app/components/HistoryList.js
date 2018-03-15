import React from 'react';

export default (props) => {

    const duplicates = props.suggestItemToShow.filter((item, index, self) => self.indexOf(item) === index);
    const historyItemsToShow = duplicates.slice(0).slice(-5);

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
