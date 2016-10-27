import React from 'react';

import DemoSection from '../demo-section/demo-section';
import CheckboxSection from './sections/checkbox';
import CheckboxErrorSection from './sections/checkbox-error';
import CheckboxGroupSection from './sections/checkbox-group';
import CheckboxGroupSizeSection from './sections/checkbox-group-size';
import CheckboxGroupOptionsSection from './sections/checkbox-group-options';
import CheckboxGroupOrientationSection from './sections/checkbox-group-orientation';

export default class DemoCheckboxs extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <DemoSection
                    title='Checkbox'
                    snippet={ require('!raw!./sections/checkbox') }
                    description='The simplest type of this component'
                >
                    <CheckboxSection />
                </DemoSection>
                <DemoSection
                    title='Checkbox with error'
                    snippet={ require('!raw!./sections/checkbox') }
                    description='You can set error to checkbox'
                    useFrame={ false }
                >
                    <CheckboxErrorSection />
                </DemoSection>
                <DemoSection
                    title='CheckboxGroup'
                    snippet={ require('!raw!./sections/checkbox-group') }
                    description='A shorthand to render group of checkboxes'
                >
                    <CheckboxGroupSection />
                </DemoSection>
                <DemoSection
                    title='CheckboxGroup Size'
                    snippet={ require('!raw!./sections/checkbox-group-size') }
                    description='CheckboxGroup with smaller size'
                >
                    <CheckboxGroupSizeSection />
                </DemoSection>
                <DemoSection
                    title='CheckboxGroup with Options'
                    snippet={ require('!raw!./sections/checkbox-group-options') }
                    description='A shorthand to render group of checkboxes via options'
                >
                    <CheckboxGroupOptionsSection />
                </DemoSection>
                <DemoSection
                    title='Oriented CheckboxGroup'
                    snippet={ require('!raw!./sections/checkbox-group-orientation') }
                    description='Checkbox groups can be vertically or horizontally oriented'
                >
                    <CheckboxGroupOrientationSection />
                </DemoSection>
            </div>
        );
    }
}
