import { storageFactory } from 'storage-factory';

export const localStorageService = storageFactory(() => localStorage);
