import React from 'react';
import { mount } from 'enzyme';
import { ButtonTheme } from './ButtonTheme';

describe('<ButtonTheme />', () => {
    test('render button with className buttonTheme', () => {
        const wrapper = mount(<ButtonTheme />);
        expect(wrapper.find('button')).toHaveClassName('buttonTheme');
    });
});
