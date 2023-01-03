import create from 'zustand';
import { getMovie } from '../../../services/api-tmdb';

export const useMovieStore = create((set) => ({
    movie: null,
    setMovie: (movie) => {
        set({ movie });
    },
    fetch: async (id) => {
        const movie = await getMovie(id);
        if (movie) {
            set({ movie });
        }
    },
}));
