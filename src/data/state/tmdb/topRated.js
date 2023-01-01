import create from 'zustand';
import { getTopRated } from '../../../services/api-tmdb';

export const useTopRatedStore = create((set) => ({
    topRated: [],
    setTopRated: (topRated) => {
        set({ topRated }, true);
    },
    fetch: async () => {
        const topRated = await getTopRated();
        if (topRated) {
            set({ topRated }, true);
        }
    },
}));
