import React from 'react';

import DemoSection from '../demo-section/demo-section';
import FormFieldSection from './sections/form-field';
import FormFieldOrientationSection from './sections/form-field-orientation';

export default class DemoFormFields extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Form field'
                    snippet={ require('!raw!./sections/form-field') }
                    description='The simplest type of this component'
                >
                    <FormFieldSection />
                </DemoSection>
                <DemoSection
                    title='Form field orientation'
                    snippet={ require('!raw!./sections/form-field-orientation') }
                    description='Differently oriented form field'
                >
                    <FormFieldOrientationSection />
                </DemoSection>
            </div>
        );
    }
}
