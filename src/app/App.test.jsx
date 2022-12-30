import React from 'react';
import { render } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
    test('test', () => {
        const wrapper = render(<App />);
        expect(wrapper.find('.testWorld').text()).toBe('World');
    });
});
