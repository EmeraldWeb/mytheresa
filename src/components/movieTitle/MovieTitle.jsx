import React from 'react';
import url from '../../data/url.json';

export function MovieTitle({ title, homepage, category }) {
    const catchPhrase = {
        popular: 'Popular: ',
        topRated: 'Top Rated: ',
        upcoming: 'Upcoming: ',
    };

    const href = homepage ?? `${url.google.searchQuery}${title.replace(' ', '+')}`;

    return (
        <span>
            {catchPhrase[category]}
            <a
                className={'movieTitle'}
                href={href}
                target={'_blank'}
                rel={'noreferrer'}
                title={title}
            >
                {title}
            </a>
        </span>
    );
}
