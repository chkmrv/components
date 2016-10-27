import React from 'react';

import DemoSection from '../demo-section/demo-section';
import TabSection from './sections/tab';
import TabGroupSection from './sections/tab-group';
import SizedTabSection from './sections/sized-tab';

export default class DemoTabs extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Tab'
                    snippet={ require('!raw!./sections/tab') }
                    description='The simplest type of this component'
                >
                    <TabSection />
                </DemoSection>
                <DemoSection
                    title='Sized tab'
                    snippet={ require('!raw!./sections/sized-tab') }
                    description='Tab with custom size'
                >
                    <SizedTabSection />
                </DemoSection>
                <DemoSection
                    title='TabGroup'
                    snippet={ require('!raw!./sections/tab-group') }
                    description='A shorthand to render group of tabs'
                >
                    <TabGroupSection />
                </DemoSection>
            </div>
        );
    }
}
