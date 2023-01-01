import create from 'zustand';
import { getPopular } from '../../../services/api-tmdb';

export const usePopularStore = create((set) => ({
    popular: [],
    setPopular: (popular) => {
        set({ popular }, true);
    },
    fetch: async () => {
        const popular = await getPopular();
        if (popular) {
            set({ popular }, true);
        }
    },
}));
