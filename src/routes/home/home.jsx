import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { usePopularStore, useUpcomingStore, useTopRatedStore } from '../../data/state/tmdb';
import { Layout, Cell } from '../../components/layout';
import { Category } from '../../components/category';

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
        <Layout
            headerContent={'Only the BEST categories from the TMDB!'}
        >
            <Cell>
                <Category
                    title={'Popular'}
                    category={'popular'}
                    list={popular}
                />
            </Cell>
            <Cell>
                <Category
                    title={'Top Rated'}
                    category={'topRated'}
                    list={topRated}
                />
            </Cell>
            <Cell>
                <Category
                    title={'Upcoming'}
                    category={'upcoming'}
                    list={upcoming}
                />
            </Cell>
        </Layout>
    );
}
