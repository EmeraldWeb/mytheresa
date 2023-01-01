import { stringify } from 'qs';

function errorHandling(errorHandler, error, url) {
    if (typeof errorHandler === 'function') {
        errorHandler(error, url);
    } else {
        const errorMessage = `${error}, url: ${url}`;
        console.error(errorMessage);
    }
}

export async function baseFetch({ url, queryParams, options, errorHandler }) {
    const fullUrl = queryParams ?
        `${url}?${stringify(queryParams)}` :
        url;

    const fullOptions = {
        ...options,
    };

    const response = await fetch(fullUrl, fullOptions)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(`${resp.status}`);
            }
        })
        .catch((error) => errorHandling(errorHandler, error, fullUrl));

    return response;
}

export const get = ({ url, queryParams, options, errorHandler }) => baseFetch({
    url,
    queryParams,
    errorHandler,
    options: {
        method: 'GET',
        ...options,
    },
});

// example
export const post = ({ url, queryParams, body, options, errorHandler }) => baseFetch({
    url,
    queryParams,
    errorHandler,
    options: {
        method: 'POST',
        body: JSON.stringify(body),
        ...options,
    },
});
