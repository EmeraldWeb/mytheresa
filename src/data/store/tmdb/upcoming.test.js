import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { useUpcomingStore } from './upcoming';

describe('useUpcomingStore', () => {
    test('setUpcoming', () => {
        const check = ['foobar'];
        function Component() {
            const setUpcoming = useUpcomingStore((state) => state.setUpcoming);
            const upcoming = useUpcomingStore((state) => state.upcoming);
            useEffect(() => {
                setUpcoming(check);
            }, []);

            return <div>{upcoming[0]}</div>;
        }

        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(check[0]);
    });
});
