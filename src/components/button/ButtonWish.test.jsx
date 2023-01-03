import React from 'react';
import { mount } from 'enzyme';
import { ButtonWish } from './ButtonWish';

describe('<ButtonWish />', () => {
    test('wished', () => {
        const wrapper = mount(<ButtonWish isWished={true} />);
        expect(wrapper.find('button')).toHaveClassName('buttonWish');
        expect(wrapper.find('button')).toHaveClassName('buttonWish__wished');
        expect(wrapper.find('button').text()).toContain('WISHED!');
    });

    test('not wished', () => {
        const wrapper = mount(<ButtonWish isWished={false} />);
        expect(wrapper.find('button')).toHaveClassName('buttonTheme');
        expect(wrapper.find('button')).not.toHaveClassName('buttonWish__wished');
        expect(wrapper.find('button').text()).toContain('WISH?');
    });
});
