import { getMovie } from '../../services/api-tmdb';

export async function movieLoader({ params }) {
    const movie = await getMovie(params.movieId);
    return { movie };
}
