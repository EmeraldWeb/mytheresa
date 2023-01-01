import { stringify } from 'qs';
import { baseFetch, get, post } from './api';

describe('API', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    beforeEach(() => {
        fetch.resetMocks();
    });

    afterEach(() => {
        consoleError.mockReset();
    });

    const mockParams = {
        url: '/foobar',
        queryParams: {
            hello: 'world',
            nice: 'day',
        },
        options: {
            method: 'GET',
        },
    };

    const mockResponse = {
        token: `foo-${Math.random()}`,
    };

    test('baseFetch 2**', async () => {
        const statusCode = 200 + Math.floor(Math.random() * 100);
        const finalUrl = `${mockParams.url}?${stringify(mockParams.queryParams)}`;

        fetch.mockResponse(JSON.stringify(mockResponse), { status: statusCode });

        const response = await baseFetch({ ...mockParams });

        expect(response?.token).toEqual(mockResponse.token);
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(finalUrl);
        expect(fetch.mock.calls[0][1].method).toEqual(mockParams.options.method);
    });

    test('baseFetch 3**', async () => {
        const statusCode = 300 + Math.floor(Math.random() * 100);

        fetch.mockResponse(JSON.stringify(mockResponse), { status: statusCode });

        await baseFetch({ ...mockParams });

        expect(consoleError).toHaveBeenCalledTimes(1);
    });

    test('baseFetch 4** error handling', async () => {
        const statusCode = 400 + Math.floor(Math.random() * 100);
        const finalUrl = `${mockParams.url}?${stringify(mockParams.queryParams)}`;

        fetch.mockResponse(JSON.stringify(mockResponse), { status: statusCode });

        let errorText = '';
        const errorHandler = (error, url) => {
            errorText = `${error}, ${url}`;
        };

        await baseFetch({ ...mockParams, errorHandler });

        expect(errorText).toEqual(`Error: ${statusCode}, ${finalUrl}`);
    });

    test('get', async () => {
        fetch.mockResponse(JSON.stringify(mockResponse), { status: 200 });
        await get({ url: '/foo' });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][1].method).toEqual('GET');
    });

    test('post', async () => {
        const body = 'HelloWorld';
        fetch.mockResponse(JSON.stringify(mockResponse), { status: 200 });
        await post({ url: '/foo', body });

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify(body));
    });
});
