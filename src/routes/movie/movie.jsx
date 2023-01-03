import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useMovieStore } from '../../data/store/tmdb';
import { useThemeStore } from '../../data/store/theme';
import { Layout, Cell } from '../../components/layout';
import { useQuery } from '../../hooks';
import { Image } from '../../components/image';
import { InfoList } from '../../components/infoList';
import { ButtonTheme } from '../../components/button';
import url from '../../data/url.json';
import './movie.scss';

export function Movie() {
    const { movie } = useLoaderData();
    const { category } = useQuery();
    const currentTheme = useThemeStore((state) => state.theme);
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

    function movieTitle() {
        const catchPhrase = {
            popular: 'Popular: ',
            topRated: 'Top Rated: ',
            upcoming: 'Upcoming: ',
        };

        const href = movie.homepage ?? `https://www.google.com/search?q=${movie.title.replace(' ', '+')}`;

        return (
            <span>
                {catchPhrase[category]}
                <a
                    className={'movie-title'}
                    href={href}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    {movie.title}
                </a>
            </span>
        );
    }

    const src = `${url.tmdb.image}/w500${movie.poster_path}`; // max width 500 for backdrop_path

    const genres = movie.genres.reduce((accum, genre) => {
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

    const buttonSize = {
        popular: 'big',
        topRated: 'small',
        upcoming: '',
    };

    function handleCLick() {
        alert(`This category and theme are "${currentTheme}"!`);
    }

    return (
        <Layout
            headerContent={movieTitle()}
        >
            <div className={'movie-block'}>
                <Cell className={'movie-image'}>
                    <Image
                        src={src}
                        alt={movie.title}
                    />
                </Cell>
                <Cell className={'movie-description'}>
                    <ButtonTheme
                        className={'movie-description-button'}
                        size={buttonSize[currentTheme]}
                        onClick={handleCLick}
                    >
                        {'Check'}
                    </ButtonTheme>

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
