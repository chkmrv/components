import React from 'react';

import DemoSection from '../demo-section/demo-section';

import DropDownSection from './sections/dropdown';
import DropDownLongTextSection from './sections/dropdown-long-text';
import DropDownEmptyOptionsSection from './sections/dropdown-empty-options';

export default class DemoDropDowns extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Dropdown'
                    description='Simplest type of component'
                    snippet={ require('!raw!./sections/dropdown') }
                    useFrame={ false }
                >
                    <DropDownSection />
                </DemoSection>
                <DemoSection
                    title='Dropdown without options'
                    description='Dropdown renders disclaimer if you do not specify options'
                    snippet={ require('!raw!./sections/dropdown-empty-options') }
                    useFrame={ false }
                >
                    <DropDownEmptyOptionsSection />
                </DemoSection>
                <DemoSection
                    title='Dropdown with long text'
                    description='For text options dropdown will handle overflow, but with custom markup you have to do it yourself'
                    snippet={ require('!raw!./sections/dropdown-long-text') }
                    useFrame={ false }
                >
                    <DropDownLongTextSection />
                </DemoSection>
            </div>
        );
    }
}
