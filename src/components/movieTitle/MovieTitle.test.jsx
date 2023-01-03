import React from 'react';
import { mount } from 'enzyme';
import { MovieTitle } from './MovieTitle';
import url from '../../data/url.json';

describe('<MovieTitle />', () => {
    test('render link with title', () => {
        const checkProps = {
            category: 'topRated',
            title: 'Foobar',
            homepage: '/home/foobar',
        };

        const wrapper = mount(<MovieTitle {...checkProps} />);

        expect(wrapper.text()).toContain('Top Rated: ');
        expect(wrapper.find('a')).toHaveClassName('movieTitle');
        expect(wrapper.find('a').prop('href')).toBe(checkProps.homepage);
        expect(wrapper.find('a').text()).toContain(checkProps.title);
    });

    test('render google search link', () => {
        const checkProps = {
            title: 'Foobar',
        };

        const googleUrl = `${url.google.searchQuery}${checkProps.title.replace(' ', '+')}`;

        const wrapper = mount(<MovieTitle {...checkProps} />);

        expect(wrapper.find('a').prop('href')).toBe(googleUrl);
    });
});
