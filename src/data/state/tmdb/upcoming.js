import create from 'zustand';
import { getUpcoming } from '../../../services/api-tmdb';

export const useUpcomingStore = create((set) => ({
    upcoming: [],
    setUpcoming: (upcoming) => {
        set({ upcoming }, true);
    },
    fetch: async () => {
        const upcoming = await getUpcoming();
        if (upcoming) {
            set({ upcoming }, true);
        }
    },
}));
