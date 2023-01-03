import create from 'zustand';

export const usePopularStore = create((set) => ({
    popular: [],
    setPopular: (popular) => {
        set({ popular });
    },
}));
