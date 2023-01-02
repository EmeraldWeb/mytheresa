import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './root';
import { Home, homeLoader } from './home';
import { ErrorPage } from './error';
import { Movie, movieLoader } from './movie';

const router = createBrowserRouter([
    {
        path: '',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: homeLoader,
            },
            {
                path: 'movie/:movieId',
                element: <Movie />,
                loader: movieLoader,
            },
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}
