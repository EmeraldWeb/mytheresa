import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { useTopRatedStore } from './topRated';

describe('useTopRatedStore', () => {
    test('setTopRated', () => {
        const check = ['foobar'];
        function Component() {
            const setTopRated = useTopRatedStore((state) => state.setTopRated);
            const topRated = useTopRatedStore((state) => state.topRated);
            useEffect(() => {
                setTopRated(check);
            }, []);

            return <div>{topRated[0]}</div>;
        }

        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(check[0]);
    });
});
