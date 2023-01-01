import React, { useEffect } from 'react';
import { getPopular, getTopRated, getUpcoming, getMovie } from '../services/api-tmdb';

export function App() {
    useEffect( () => {
        async function fetchCategories() { // TODO: place in route with state manager
            const popular = await getPopular();
            const topRated = await getTopRated();
            const upcoming = await getUpcoming();
            const movie = await getMovie(238);

            console.log('popular - ', popular);
            console.log('topRated - ', topRated);
            console.log('upcoming - ', upcoming);
            console.log('movie - ', movie);
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
