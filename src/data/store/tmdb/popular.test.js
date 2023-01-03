import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { usePopularStore } from './popular';

describe('usePopularStore', () => {
    test('setPopular', () => {
        const check = ['foobar'];
        function Component() {
            const setPopular = usePopularStore((state) => state.setPopular);
            const popular = usePopularStore((state) => state.popular);
            useEffect(() => {
                setPopular(check);
            }, []);

            return <div>{popular[0]}</div>;
        }

        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(check[0]);
    });
});
