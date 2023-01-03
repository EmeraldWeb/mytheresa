import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { mount } from 'enzyme';
import { useQuery } from './useQuery';

describe('useQuery', () => {
    test('returns parsed queries', () => {
        function Root() {
            const navigate = useNavigate();
            return <button onClick={() => {
                navigate('/home?page=1&name=testing');
            }}>123</button>;
        }

        function Home() {
            const params = useQuery();
            return <div>{params.name}</div>;
        }

        const router = createBrowserRouter([
            {
                path: '/',
                element: <Root />,
            },
            {
                path: '/home',
                element: <Home />,
            },
        ]);

        const wrapper = mount(<RouterProvider router={router} />);
        wrapper.simulate('click');
        expect(wrapper.html()).toContain('testing');
    });
});
