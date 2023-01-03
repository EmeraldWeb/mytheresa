import create from 'zustand';
import { localStorageService } from '../../../services/local-storage';

export const localWishListKey = 'moviesWishList';

function refreshWishList(movieId, method) {
    const prevWishList = JSON.parse(localStorageService.getItem(localWishListKey) ?? '[]');
    let newList = new Set(prevWishList);
    newList[method](Number(movieId));

    newList = [...newList];
    localStorageService.setItem(localWishListKey, JSON.stringify(newList));
    return newList;
}

export const useWishListStore = create((set) => ({
    wishList: localStorageService.getItem(localWishListKey) ?? [],
    add: (movieId) => {
        const newList = refreshWishList(movieId, 'add');
        set({ wishList: newList });
    },
    remove: (movieId) => {
        const newList = refreshWishList(movieId, 'delete');
        set({ wishList: newList });
    },
}));
