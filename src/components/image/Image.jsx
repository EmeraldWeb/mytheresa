import React from 'react';

export function Image({ src, alt, ...otherProps }) {
    const altText = alt ?? src;
    return (
        <img
            src={src}
            alt={altText}
            {...otherProps}
        />
    );
}
