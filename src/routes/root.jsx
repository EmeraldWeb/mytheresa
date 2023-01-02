import React from 'react';
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <>
            <Outlet />
        </>
    );
}
