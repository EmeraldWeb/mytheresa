import React from 'react';
import { CarouselCategory } from './CarouselCategory';
import './Category.scss';

export function Category({ title, category, list }) {
    return (
        <div className={'category'}>
            <h2 className={'category-header'}>
                {title}
            </h2>

            <CarouselCategory
                list={list}
                category={category}
            />
        </div>
    );
}
