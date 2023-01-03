import create from 'zustand';

export const useUpcomingStore = create((set) => ({
    upcoming: [],
    setUpcoming: (upcoming) => {
        set({ upcoming });
    },
}));
