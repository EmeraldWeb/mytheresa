import React from 'react';
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <div>
            ROOT
            <Outlet />
        </div>
    );
}
