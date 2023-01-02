import React from 'react';
import { Header } from './Header';
import './Layout.scss';

export function Layout({ headerContent, children }) {
    return (
        <div className={'layout'}>
            <Header className={'layout-cell'}>
                {headerContent}
            </Header>
            <main className={'layout-main'}>
                {children}
            </main>
        </div>
    );
}
