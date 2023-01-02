import React from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './routes';
import './index.html';
import './styles';

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    );
} else {
    console.error('App container not found.');
}
