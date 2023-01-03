import React from 'react';
import { ButtonTheme } from './ButtonTheme';
import './ButtonWish.scss';

export function ButtonWish({ isWished = false, className = '', onClick, children, ...otherProps }) {
    const modifier = isWished ? 'buttonWish__wished' : '';
    const wishText = isWished ? 'WISHED!' : 'WISH?';
    const text = children ?? wishText;
    return (
        <ButtonTheme
            className={`buttonWish ${modifier} ${className}`}
            onClick={onClick}
            {...otherProps}
        >
            {text}
        </ButtonTheme>
    );
}
