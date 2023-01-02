import React from 'react';
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <React.Suspense fallback={'Waiting...'}>
            <Outlet />
        </React.Suspense>
    );
}
