import React, { useEffect } from 'react';
import { usePopularStore, useMovieStore, useTopRatedStore, useUpcomingStore } from '../../data/state/tmdb';

export function App() {
    const popular = usePopularStore((state) => state.popular);
    const movie = useMovieStore((state) => state.movie);
    const topRated = useTopRatedStore((state) => state.topRated);
    const upcoming = useUpcomingStore((state) => state.upcoming);

    console.log('POPULAR', popular);
    console.log('MOVIE', movie);
    console.log('TOPRATED', topRated);
    console.log('UPCOMING', upcoming);

    const fetchPopular = usePopularStore((state) => state.fetch);
    const fetchMovie = useMovieStore((state) => state.fetch);
    const fetchTopRated = useTopRatedStore((state) => state.fetch);
    const fetchUpcoming = useUpcomingStore((state) => state.fetch);

    useEffect( () => {
        function fetchCategories() { // TODO: place in route with state manager
            fetchPopular();
            fetchMovie(238);
            fetchTopRated();
            fetchUpcoming();
        }

        fetchCategories();
    }, []);

    return (
        <div>
            {'Hello'}
            <span className={'testWorld'}>{'World'}</span>
        </div>
    );
}
