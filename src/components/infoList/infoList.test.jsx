import React from 'react';
import { mount } from 'enzyme';
import { InfoList } from './InfoList';

describe('<InfoList />', () => {
    test('render list', () => {
        const check = [
            { title: 'FOO', text: 'bar' },
            { title: 's1231s', text: 'admk123' },
            { title: 'Google', text: 'Doodle' },
        ];
        const wrapper = mount(
            <InfoList list={check} />
        );

        expect(wrapper.find('ul')).toHaveClassName('infoList');
        expect(wrapper.find('li')).toHaveLength(3);
        expect(wrapper.find('li').first().text()).toContain(check[0].title);
        expect(wrapper.find('li').at(1).text()).toContain(check[1].title);
        expect(wrapper.find('li').last().text()).toContain(check[2].text);
    });
});
