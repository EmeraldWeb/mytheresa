import React, { useEffect } from 'react';
import { mount, render } from 'enzyme';
import { useThemeStore } from './theme';
import themes from '../../data/themes.json';

describe('useThemeStore', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    beforeEach(() => {
        fetch.resetMocks();
    });

    afterEach(() => {
        consoleError.mockReset();
    });

    test('defaultTheme', () => {
        function Component() {
            const theme = useThemeStore((state) => state.theme);
            return <div>{theme}</div>;
        }
        const wrapper = render(<Component />);
        expect(wrapper.html()).toContain('main');
    });

    test('list', () => {
        function Component() {
            const list = useThemeStore((state) => state.list);
            return <div>{list.join(',')}</div>;
        }
        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(Object.keys(themes).join(','));
    });

    test('setTheme wrong', () => {
        const check = 'hello';
        function Component() {
            const setTheme = useThemeStore((state) => state.setTheme);
            const theme = useThemeStore((state) => state.theme);
            useEffect(() => {
                setTheme(check);
            }, []);

            return <div>{theme}</div>;
        }

        const wrapper = mount(<Component />);
        expect(consoleError).toHaveBeenCalledTimes(1);
        expect(wrapper.html()).toContain('main');
    });

    test('setTheme', () => {
        const check = 'popular';
        function Component() {
            const setTheme = useThemeStore((state) => state.setTheme);
            const theme = useThemeStore((state) => state.theme);
            useEffect(() => {
                setTheme(check);
            }, []);

            return <div>{theme}</div>;
        }

        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(check);
    });
});
