import React from 'react';
import { mount } from 'enzyme';
import { Layout } from './Layout';

describe('<Layout />', () => {
    test('contain header and main', () => {
        const wrapper = mount(<Layout />);

        expect(wrapper.find('header')).toExist();
        expect(wrapper.find('main')).toExist();
    });

    test('render children', () => {
        const checkChildren = 'doodle';
        const wrapper = mount(
            <Layout>
                <button className={checkChildren} />
            </Layout>
        );

        expect(wrapper.find('button')).toHaveClassName(checkChildren);
    });
});
