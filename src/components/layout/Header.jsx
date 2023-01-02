import React from 'react';
import { Image } from '../image';
import './Header.scss';
import url from '../../data/url.json';
import '../../public/tmdb_blue_short.svg';

export function Header({ children, className }) {
    return (
        <header className={`layout-header ${className}`}>
            <a
                className={'layout-logo'}
                href={url.tmdb.domain}
                target={'_blank'}
                rel={'noreferrer'}
            >
                <Image
                    className={'layout-logo-img'}
                    src={'/public/tmdb_blue_short.svg'}
                    alt={'logo TMDB'}
                />
            </a>
            <h1 className={'layout-headline'}>
                {children}
            </h1>
        </header>
    );
}
