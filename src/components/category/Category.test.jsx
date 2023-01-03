import React from 'react';
import { mount } from 'enzyme';
import { Category } from './Category';

describe('<Category />', () => {
    test('render header and carousel', () => {
        const check = {
            title: 'HelloWorld',
            category: 'popular',
            list: [
                {
                    id: '12312rfwf2134',
                    title: 'Hi!',
                },
            ],
        };

        const wrapper = mount(
            <Category {...check} />
        );

        expect(wrapper.find('h2').text()).toContain(check.title);
        expect(wrapper.find('ul')).toHaveClassName('react-multi-carousel-track');
    });
});
