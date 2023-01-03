import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { useMovieStore } from './movie';

describe('useMovieStore', () => {
    test('setMovie', () => {
        const check = { foo: 'bar' };
        function Component() {
            const setMovie = useMovieStore((state) => state.setMovie);
            const movie = useMovieStore((state) => state.movie);
            useEffect(() => {
                setMovie(check);
            }, []);

            return <div>{movie?.foo}</div>;
        }

        const wrapper = mount(<Component />);
        expect(wrapper.html()).toContain(check.foo);
    });
});
