import React from 'react';
import './Layout.scss';

export function Layout({ headerContent, children }) {
    return (
        <div className={'layout'}>
            <header className={'layout-header'}>
                {headerContent}
            </header>
            <main className={'layout-main'}>
                {children}
            </main>
        </div>
    );
}
