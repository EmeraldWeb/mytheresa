import React from 'react';

export function Cell({ children, ...otherProps }) {
    return (
        <div
            className={'layout-cell'}
            {...otherProps}
        >
            {children}
        </div>
    );
}
