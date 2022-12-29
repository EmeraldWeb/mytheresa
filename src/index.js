import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.html';
import './index.sass';

function App() {
    return (
        <div>{'Hello World'}</div>
    )
}

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
