import create from 'zustand';

export const useTopRatedStore = create((set) => ({
    topRated: [],
    setTopRated: (topRated) => {
        set({ topRated });
    },
}));
