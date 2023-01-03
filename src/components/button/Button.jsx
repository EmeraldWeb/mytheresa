import React from 'react';
import './Button.scss';

export function Button({ children, className, size, ...otherProps }) {
    const sizeType = {
        'small': 'button__small',
        'big': 'button__big',
    };

    return (
        <button
            className={`button ${(sizeType[size] ?? '')} ${className}`}
            type={'button'}
        >
            {children}
        </button>
    );
}
