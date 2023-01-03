import React from 'react';
import { Button } from './Button';
import './ButtonTheme.scss';

export function ButtonTheme({ className, onClick, ...otherProps }) {
    return (
        <Button
            className={`buttonTheme ${className}`}
            onClick={onClick}
            {...otherProps}
        />
    );
}
