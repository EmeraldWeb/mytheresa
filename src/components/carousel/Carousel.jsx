import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const defaultResponsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const defaultParams = {
    swipeable: false,
    draggable: false,
    showDots: false,
    partialVisible: true,
    ssr: true, // means to render carousel on server-side.
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 2000,
    keyBoardControl: false,
};

export function Carousel({ children, params, responsive, className }) {
    const finalParams = {
        ...defaultParams,
        containerClass: className,
        ...(params ?? {}),
    };
    return (
        <MultiCarousel
            responsive={responsive ?? defaultResponsive}
            {...finalParams}
        >
            {children}
        </MultiCarousel>
    );
}
