import React from 'react';
import { mount } from 'enzyme';
import { Cell } from './Cell';

describe('<Cell />', () => {
    test('render children', () => {
        const check = 'foobar';
        const checkChildren = 'doodle';
        const wrapper = mount(
            <Cell className={check}>
                <button className={checkChildren} />
            </Cell>
        );

        expect(wrapper.find('div')).toHaveClassName('layout-cell');
        expect(wrapper.find('div')).toHaveClassName(check);
        expect(wrapper.find('button')).toHaveClassName(checkChildren);
    });
});
