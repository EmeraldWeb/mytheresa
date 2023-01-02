import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getMovie } from '../services/api-tmdb';
import { useMovieStore } from '../data/state/tmdb';

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
            <>
                <div>{'Sorry, there isn\'t such movie'}</div>
                <Link to={`/`}>Home</Link>
            </>
        );
    }

    return (
        <>
            <div>
                Movie
                <Link to={`/`}>Home</Link>
            </div>
        </>
    );
}
