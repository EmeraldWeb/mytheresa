import React from 'react';
import './InfoList.scss';

export function InfoList({ list = [] }) {
    function renderList(list) {
        const items = list.map((element, index) => {
            return (
                <li
                    key={`${index}-${element.title}`}
                    className={'infoList-item'}
                >
                    <b className={'infoList-item-title'}>
                        {`${element.title}:`}
                    </b>

                    <span className={'infoList-item-text'}>
                        {element.text}
                    </span>
                </li>
            );
        });

        return items;
    }

    return (
        <ul className={'infoList'}>
            {renderList(list)}
        </ul>
    );
}
