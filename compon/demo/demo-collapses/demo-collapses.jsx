import React from 'react';

import DemoSection from '../demo-section/demo-section';
import CollapseSection from './sections/collapse';
import CollapseGroupSection from './sections/collapse-group';
import AccordionSection from './sections/accordion';

export default class DemoCollapses extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Collapse'
                    snippet={ require('!raw!./sections/collapse') }
                    description='The simplest type of this component'
                    useFrame={ false }
                >
                    <CollapseSection />
                </DemoSection>
                <DemoSection
                    title='Collapse group'
                    snippet={ require('!raw!./sections/collapse-group') }
                    description='A shorthand to render group of collapses'
                    useFrame={ false }
                >
                    <CollapseGroupSection />
                </DemoSection>
                <DemoSection
                    title='Accordion'
                    snippet={ require('!raw!./sections/accordion') }
                    description='A shorthand to render accordion'
                    useFrame={ false }
                >
                    <AccordionSection />
                </DemoSection>
            </div>
        );
    }
}
