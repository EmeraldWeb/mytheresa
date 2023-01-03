import React from 'react';

export function Cell({ children, className, ...otherProps }) {
    return (
        <div
            className={`layout-cell ${className}`}
            {...otherProps}
        >
            {children}
        </div>
    );
}
