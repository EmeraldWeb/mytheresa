import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Layout, Cell } from '../../components/layout';

export function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const errorStatus = <h1>{`Error: ${error.status}, ${error.statusText}`}</h1>;

    return (
        <Layout headerContent={errorStatus}>
            <Cell>
                <h2>
                    {'Sorry, an unexpected error has occurred.'}
                </h2>
                <p>
                    {error.message}
                </p>
            </Cell>
        </Layout>
    );
}
