import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import './index.html';
import './styles';

const root = document.getElementById('app');

if (root) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error('App container not found.');
}
