import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useMovieStore } from '../../data/store/tmdb';
import { useThemeStore } from '../../data/store/theme';
import { useWishListStore } from '../../data/store/tmdb/wishList';
import { Layout, Cell } from '../../components/layout';
import { useQuery } from '../../hooks';
import { Image } from '../../components/image';
import { InfoList } from '../../components/infoList';
import { ButtonWish } from '../../components/button';
import { MovieTitle } from '../../components/movieTitle';
import url from '../../data/url.json';
import './movie.scss';

export function Movie() {
    const { movie } = useLoaderData();
    const { category } = useQuery();
    const setTheme = useThemeStore((state) => state.setTheme);

    const setMovie = useMovieStore((state) => state.setMovie);
    setMovie(movie);

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

    useEffect(() => {
        document.title = `TMDB - ${movie.title}`;
    }, [movie.title]);

    useEffect(() => {
        setTheme(category);
    }, [category]);

    const src = `${url.tmdb.image}/w500${movie.poster_path}`; // max width 500 for backdrop_path

    const genres = movie.genres?.reduce((accum, genre) => {
        return accum += `${genre.name}, `;
    }, '').slice(0, -2);

    const infoList = [
        { title: 'Release Date', text: movie.release_date },
        { title: 'Original Title', text: movie.original_title },
        { title: 'Runtime', text: `${movie.runtime} min` },
        { title: 'Revenue', text: `$${movie.revenue}` },
        { title: 'Genres', text: genres },
        { title: 'Popularity', text: movie.popularity },
        { title: 'Vote Average', text: movie.vote_average },
        { title: 'Vote Count', text: movie.vote_count },
    ];

    const wishList = useWishListStore((state) => state.wishList);
    const wishListAdd = useWishListStore((state) => state.add);
    const wishListRemove = useWishListStore((state) => state.remove);

    const isWished = wishList.includes(Number(movie.id));

    function toggleWish() {
        if (isWished) {
            wishListRemove(movie.id);
        } else {
            wishListAdd(movie.id);
        }
    }

    return (
        <Layout
            headerContent={
                <MovieTitle
                    title={movie.title}
                    homepage={movie.homepage}
                    category={category}
                />
            }
        >
            <div className={'movie-block'}>
                <Cell
                    className={`movie-image ${isWished ? 'movie-image__wished' : ''}`}
                >
                    <Image
                        src={src}
                        alt={movie.title}
                    />
                </Cell>
                <Cell className={'movie-description'}>
                    <ButtonWish
                        className={'movie-wish-button'}
                        isWished={isWished}
                        onClick={toggleWish}
                    />

                    <h2 className={'movie-description-headline'}>
                        {'Description'}
                    </h2>

                    <InfoList list={infoList} />
                </Cell>
            </div>

            <Cell className={'movie-info'}>
                <h3 className={'movie-info-headline'}>
                    {movie.tagline ?? 'Additional Info'}
                </h3>

                <p>{movie.overview}</p>
            </Cell>
        </Layout>
    );
}
