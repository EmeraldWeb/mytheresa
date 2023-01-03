import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { usePopularStore, useUpcomingStore, useTopRatedStore } from '../../data/store/tmdb';
import { useThemeStore } from '../../data/store/theme';
import { Layout, Cell } from '../../components/layout';
import { Category } from '../../components/category';
import './home.scss';

export function Home() {
    const { popular, upcoming, topRated } = useLoaderData();
    const setTheme = useThemeStore((state) => state.setTheme);

    useEffect(() => {
        setTheme?.('main');
    }, []);

    // example and for future purposes
    const setPopular = usePopularStore((state) => state.setPopular);
    setPopular(popular);
    const setUpcoming = useUpcomingStore((state) => state.setUpcoming);
    setUpcoming(upcoming);
    const setTopRated = useTopRatedStore((state) => state.setTopRated);
    setTopRated(topRated);

    return (
        <Layout
            headerContent={'Only the BEST categories from the TMDB!'}
        >
            <Cell className={'home-category'}>
                <Category
                    title={'Popular'}
                    category={'popular'}
                    list={popular}
                />
            </Cell>
            <Cell className={'home-category'}>
                <Category
                    title={'Top Rated'}
                    category={'topRated'}
                    list={topRated}
                />
            </Cell>
            <Cell className={'home-category'}>
                <Category
                    title={'Upcoming'}
                    category={'upcoming'}
                    list={upcoming}
                />
            </Cell>
        </Layout>
    );
}
