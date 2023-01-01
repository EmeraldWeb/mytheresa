import { stringify } from 'qs';
import { queries, getPopular, getTopRated, getUpcoming, getMovie } from './api-tmdb';
import { tmdb } from '../data/url.json';

describe('API TMDB', () => {
    const queryParams = stringify(queries);

    beforeEach(() => {
        fetch.resetMocks();
    });

    test('getPopular', async () => {
        const url = `${tmdb.api}/movie/popular`;
        fetch.mockResponse(JSON.stringify({}));
        await getPopular();

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`${url}?${queryParams}&page=1`);
        expect(fetch.mock.calls[0][1].method).toEqual('GET');
    });

    test('getTopRated', async () => {
        const url = `${tmdb.api}/movie/top_rated`;
        fetch.mockResponse(JSON.stringify({}));
        await getTopRated();

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`${url}?${queryParams}&page=1`);
        expect(fetch.mock.calls[0][1].method).toEqual('GET');
    });

    test('getUpcoming', async () => {
        const url = `${tmdb.api}/movie/upcoming`;
        fetch.mockResponse(JSON.stringify({}));
        await getUpcoming();

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`${url}?${queryParams}&page=1`);
        expect(fetch.mock.calls[0][1].method).toEqual('GET');
    });

    test('getMovie', async () => {
        const id = `id-${Math.random()}`;
        const url = `${tmdb.api}/movie/${id}`;
        fetch.mockResponse(JSON.stringify({}));
        await getMovie(id);

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`${url}?${queryParams}`);
        expect(fetch.mock.calls[0][1].method).toEqual('GET');
    });
});
