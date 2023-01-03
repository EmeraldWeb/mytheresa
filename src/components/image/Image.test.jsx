import React from 'react';
import { mount } from 'enzyme';
import { Image } from './Image';

describe('<Image />', () => {
    test('render image with props', () => {
        const check = {
            className: 'fooImg',
            src: '/foobar.jpg',
            srcSet: '/foobar.png 1x, /foobar2.png 2x',
            alt: 'FOOBAR',
        };

        const wrapper = mount(<Image {...check} />);
        expect(wrapper.find('img')).toHaveClassName(check.className);
        expect(wrapper.find('img').prop('src')).toBe(check.src);
        expect(wrapper.find('img').prop('srcSet')).toBe(check.srcSet);
        expect(wrapper.find('img').prop('alt')).toBe(check.alt);
    });
});
