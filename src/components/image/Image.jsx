import React from 'react';

export function Image({ src, srcSet, alt, ...otherProps }) {
    const altText = alt ?? src;
    return (
        <img
            src={src}
            srcSet={srcSet}
            alt={altText}
            {...otherProps}
        />
    );
}
