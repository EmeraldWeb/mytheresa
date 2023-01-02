import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getMovie } from '../services/api-tmdb';
import { useMovieStore } from '../data/state/tmdb';
import { Layout, Cell } from '../components/layout';

export async function movieLoader({ params }) {
    const movie = await getMovie(params.movieId);
    return { movie };
}

export function Movie() {
    const { movie } = useLoaderData();
    const setMovie = useMovieStore((state) => state.setMovie);
    setMovie?.(movie);
    console.log('movie', movie);

    if (!movie) {
        return (
            <Layout
                headerContent={<h1>{'Sorry, there isn\'t such movie'}</h1>}
            >
                <Cell>
                    <Link to={`/`}>Home</Link>
                </Cell>
            </Layout>
        );
    }

    return (
        <Layout
            headerContent={<h1>{'Movie!'}</h1>}
        >
            <Cell>
                Movie
                <Link to={`/`}>Home</Link>
            </Cell>
        </Layout>
    );
}
