import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import CarouselSection from './sections/carousel';
import CarouselHidNavSection from './sections/carousel-hidnav';
import CarouselAutoSection from './sections/carousel-auto';

const cn = theme.className('demo-carousel');


export default class DemoCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='Carousel'
                    snippet={ require('!raw!./sections/carousel') }
                    description='The simplest type of this component'
                >
                    <CarouselSection/>
                </DemoSection>
                <DemoSection
                    title='Carousel hidden nav'
                    snippet={ require('!raw!./sections/carousel-hidnav') }
                    description='The type of this carousel with hidden nav'
                >
                    <CarouselHidNavSection/>
                </DemoSection>
                <DemoSection
                    title='Carousel Auto slide'
                    snippet={ require('!raw!./sections/carousel-auto') }
                    description='The auto type of this carousel'
                >
                    <CarouselAutoSection/>
                </DemoSection>
            </div>
        );
    }
}
