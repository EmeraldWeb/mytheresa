import React from 'react';
import { render } from 'enzyme';
import { useWishListStore } from './wishList';

describe('useWishListStore', () => {
    // LS MOCK - https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
    const localStorageMock = (function() {
        let store = {};
        return {
            getItem: function(key) {
                return store[key];
            },
            setItem: function(key, value) {
                store[key] = value.toString();
            },
            clear: function() {
                store = {};
            },
            removeItem: function(key) {
                delete store[key];
            },
        };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    const number1 = Math.random() * 100;
    const number2 = Math.random() * 100;

    test('defaultWishList', () => {
        function Component() {
            const wishList = useWishListStore((state) => state.wishList);
            return <div>{wishList.join(',')}</div>;
        }
        const wrapper = render(<Component />);
        expect(wrapper.html()).toContain('');
    });

    test('add', () => {
        function Component() {
            const add = useWishListStore((state) => state.add);
            add(number1);
            add(number2);

            const wishList = useWishListStore((state) => state.wishList);

            return <div>{wishList.join(',')}</div>;
        }
        const wrapper = render(<Component />);
        expect(wrapper.html()).toContain([number1, number2].join(','));
    });

    test('remove', () => {
        function Component() {
            const remove = useWishListStore((state) => state.remove);
            const wishList = useWishListStore((state) => state.wishList);

            if (wishList.includes(number1)) {
                remove(number1);
            }

            return <div>{wishList.join(',')}</div>;
        }

        const wrapper = render(<Component />);
        expect(wrapper.text()).toContain([number2].join(','));
    });
});
