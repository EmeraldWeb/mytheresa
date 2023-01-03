import create from 'zustand';
import themes from '../themes.json';

const selector = ':root';
const propertyKey = '--theme-key';
const themeList = Object.keys(themes);

export const useTheme = create((set) => ({
    list: themeList,
    theme: 'main',
    setTheme: (newTheme) => {
        if (!themeList.includes(newTheme)) {
            console.error(`Error: there is no such theme "${newTheme}"`);
            return;
        }

        const rootCss = document.querySelector(selector);

        if (rootCss) {
            rootCss.style.setProperty(propertyKey, newTheme);
            Object.keys(themes[newTheme]).forEach((key) => {
                rootCss.style.setProperty(key, themes[newTheme][key]);
            });

            set({ theme: newTheme });
        }
    },
}));
