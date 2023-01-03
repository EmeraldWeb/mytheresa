import React from 'react';
import { mount } from 'enzyme';
import { Carousel } from './Carousel';

describe('<Carousel />', () => { // TODO: how to test internal non rendered li
    test('render with className', () => {
        const strings = ['foobar', 'barbaz', 'zipzap'];

        function renderChildren() {
            const children = strings.map((string, index) => {
                return (
                    <div key={string} className={`class-${string}`}>
                        {string}
                    </div>
                );
            });

            return children;
        }

        const wrapper = mount(
            <Carousel className={'foobar'}>{renderChildren()}</Carousel>
        );

        expect(wrapper.find('ul')).toHaveClassName('react-multi-carousel-track');
        expect(wrapper.find(`.foobar`)).toExist();
    });
});
