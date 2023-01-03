import React from 'react';
import { mount } from 'enzyme';
import { Header } from './Header';

describe('<Header />', () => {
    test('contain header and h1', () => {
        const wrapper = mount(<Header />);

        expect(wrapper.find('header')).toExist();
        expect(wrapper.find('h1')).toExist();
    });

    test('contain logo', () => {
        const wrapper = mount(<Header />);

        expect(wrapper.find('img')).toHaveClassName('layout-logo-img');
        expect(wrapper.find('img').prop('src')).toBe('/public/tmdb_blue_short.svg');
    });

    test('render children', () => {
        const check = 'foobar';
        const checkChildren = 'doodle';
        const wrapper = mount(
            <Header className={check}>
                <button className={checkChildren} />
            </Header>
        );

        expect(wrapper.find('header')).toHaveClassName(check);
        expect(wrapper.find('button')).toHaveClassName(checkChildren);
    });
});
