import create from 'zustand';

export const useMovieStore = create((set) => ({
    movie: null,
    setMovie: (movie) => {
        set({ movie });
    },
}));
