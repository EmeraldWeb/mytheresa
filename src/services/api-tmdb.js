import { get } from './api';
import { tmdb } from '../data/url.json';
import { tmdbAPIKey } from '../data/const';

const keyAPI = tmdbAPIKey;
const mainUrl = tmdb.api;

export const queries = {
    'api_key': keyAPI,
    'language': 'en-US', // TODO: check user locale
};

export function getPopular(page = 1) {
    const url = `${mainUrl}/movie/popular`; // GET /movie/popular

    return get({
        url,
        queryParams: {
            ...queries,
            page,
        },
    });
}

export function getTopRated(page = 1) {
    const url = `${mainUrl}/movie/top_rated`; // GET /movie/top_rated

    return get({
        url,
        queryParams: {
            ...queries,
            page,
        },
    });
}

export function getUpcoming(page = 1) {
    const url = `${mainUrl}/movie/upcoming`; // GET /movie/upcoming

    return get({
        url,
        queryParams: {
            ...queries,
            page,
        },
    });
}

export function getMovie(id) {
    const url = `${mainUrl}/movie/${id}`; // GET /movie/{movie_id}

    return get({
        url,
        queryParams: queries,
    });
}

