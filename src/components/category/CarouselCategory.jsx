import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel } from '../carousel/Carousel';
import { Image } from '../image';
import url from '../../data/url.json';
import './CarouselCategory.scss';

const responsive = {
    desktop: {
        breakpoint: { max: 1920, min: 1440 },
        items: 7,
        // slidesToSlide: 3 // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1440, min: 1024 },
        items: 5,
        // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        partialVisibilityGutter: 30,
    },
    tabletSmall: {
        breakpoint: { max: 768, min: 425 },
        items: 2,
        partialVisibilityGutter: 10,
    },
    mobile: {
        breakpoint: { max: 425, min: 0 },
        items: 1,
        partialVisibilityGutter: 80,
    },
};

export function CarouselCategory({ list, category }) {
    function renderList(listOfmovies, movieCategory) {
        const listOfLinks = listOfmovies.map((movie, index) => {
            return (
                <Link
                    className={'carouselCategory-link'}
                    key={`${index}-${movie.id}`}
                    to={`movie/${movie.id}?category=${movieCategory}`}
                    title={movie.title}
                >
                    <Image
                        className={'carouselCategory-image'}
                        src={`${url.tmdb.image}/w200/${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                    />

                    <span className={'carouselCategory-voteAverage'}>
                        {movie.vote_average}
                    </span>
                </Link>
            );
        });

        return listOfLinks;
    }

    return (
        <Carousel
            className={'carouselCategory'}
            responsive={responsive}
        >
            {renderList(list, category)}
        </Carousel>
    );
}
