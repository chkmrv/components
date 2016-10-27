import React from 'react';

import DemoSection from '../demo-section/demo-section';
import RadioSection from './sections/radio';
import RadioGroupSection from './sections/radio-group';
import RadioGroupSizSection from './sections/radio-group-size';
import RadioGroupOrientationSection from './sections/radio-group-orientation';

export default class DemoRadios extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <DemoSection
                    title='Radio'
                    snippet={ require('!raw!./sections/radio') }
                    description='The simplest type of this component'
                >
                    <RadioSection />
                </DemoSection>
                <DemoSection
                    title='RadioGroup'
                    snippet={ require('!raw!./sections/radio-group') }
                    description='A shorthand to render group of radio buttons'
                >
                    <RadioGroupSection />
                </DemoSection>
                <DemoSection
                    title='RadioGroup Size'
                    snippet={ require('!raw!./sections/radio-group-size') }
                    description='Group with smaller font'
                >
                    <RadioGroupSizSection />
                </DemoSection>
                <DemoSection
                    title='Oriented RadioGroup'
                    snippet={ require('!raw!./sections/radio-group-orientation') }
                    description='Radio groups can be vertically or horizontally oriented'
                >
                    <RadioGroupOrientationSection />
                </DemoSection>
            </div>
        );
    }
}
