import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import ButtonSection from './sections/button';
import ButtonColorSection from './sections/button-color';
import ButtonSizeSection from './sections/button-size';

const cn = theme.className('demo-buttons');


export default class DemoButtons extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='Button'
                    snippet={ require('!raw!./sections/button') }
                    description='The simplest type of this component'
                >
                    <ButtonSection />
                </DemoSection>
                <DemoSection
                    title='Colored button'
                    snippet={ require('!raw!./sections/button-color') }
                    description='Button with custom color'
                >
                    <ButtonColorSection />
                </DemoSection>
                <DemoSection
                    title='Sized button'
                    snippet={ require('!raw!./sections/button-size') }
                    description='Button with custom size'
                >
                    <ButtonSizeSection />
                </DemoSection>
            </div>
        );
    }
}
