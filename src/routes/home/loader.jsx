import { getPopular, getTopRated, getUpcoming } from '../../services/api-tmdb';

export async function homeLoader() {
    const responses = await Promise.all([
        getPopular(),
        getUpcoming(),
        getTopRated(),
    ]).then((values) => values);

    return {
        popular: responses[0]?.results ?? [],
        upcoming: responses[1]?.results ?? [],
        topRated: responses[2]?.results ?? [],
    };
}
