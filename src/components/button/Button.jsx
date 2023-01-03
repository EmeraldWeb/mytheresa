import React from 'react';
import './Button.scss';

export function Button({ children, className = '', onClick, size, ...otherProps }) {
    const sizeType = {
        small: 'button__small',
        big: 'button__big',
    };

    return (
        <button
            className={`button ${(sizeType[size] ?? '')} ${className}`}
            type={'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
