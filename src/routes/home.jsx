import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { usePopularStore, useUpcomingStore, useTopRatedStore } from '../data/state/tmdb';
import { getPopular, getTopRated, getUpcoming } from '../services/api-tmdb';

export async function homeLoader() {
    const responses = await Promise.all([
        getPopular(),
        getUpcoming(),
        getTopRated(),
    ]).then((values) => values);

    return {
        popular: responses[0]?.results ?? [],
        upcoming: responses[1]?.results ?? [],
        topRated: responses[2]?.results ?? [],
    };
}

export function Home() {
    const { popular, upcoming, topRated } = useLoaderData();

    // TODO: bugreport to Zustand - setFunction become undefined
    const setPopular = usePopularStore((state) => state.setPopular);
    setPopular?.(popular);
    const setUpcoming = useUpcomingStore((state) => state.setUpcoming);
    setUpcoming?.(upcoming);
    const setTopRated = useTopRatedStore((state) => state.setTopRated);
    setTopRated?.(topRated);

    return (
        <div>
            Home
            <Link to={`movie/132`}>Your Name</Link>
        </div>
    );
}
