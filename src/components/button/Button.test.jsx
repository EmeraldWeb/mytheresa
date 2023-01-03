import React from 'react';
import { render, mount } from 'enzyme';
import { Button } from './Button';

describe('<Button />', () => {
    test('render child', () => {
        const string = 'foobar';
        const node = <span>{string}</span>;
        const wrapper = render(
            <Button>
                {node}
            </Button>
        );

        expect(wrapper.html()).toContain(string);
    });

    test('size', () => {
        const size = {
            key: 'small',
            value: 'button__small',
        };

        const wrapper = mount(<Button size={size.key} />);
        expect(wrapper.find('button')).toHaveClassName(size.value);
    });

    test('onClick', () => {
        let bool = false;
        const wrapper = mount(
            <Button
                onClick={() => {
                    bool = !bool;
                }}
            />
        );

        wrapper.simulate('click');
        expect(bool).toBe(true);

        wrapper.simulate('click');
        expect(bool).toBe(false);
    });
});
