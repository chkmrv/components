import React from 'react';

import DemoSection from '../demo-section/demo-section';
import DatePickerSection from './sections/date-picker';
import DatePickerErrorSection from './sections/date-picker-error';
import DatePickerOffdaysSection from './sections/date-picker-offdays';
import DatePickerLimitsSection from './sections/date-picker-limits';
import DatePickerFormatsSection from './sections/date-picker-formats';
import DatePickerNamesSection from './sections/date-picker-names';

export default class DemoDatePickers extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='DatePicker'
                    snippet={ require('!raw!./sections/date-picker') }
                    description='The simplest type of this component'
                    useFrame={ false }
                >
                    <DatePickerSection />
                </DemoSection>
                <DemoSection
                    title='DatePicker with error'
                    snippet={ require('!raw!./sections/date-picker-error') }
                    description='You can set error to date picker'
                    useFrame={ false }
                >
                    <DatePickerErrorSection />
                </DemoSection>
                <DemoSection
                    title='DatePicker with offdays'
                    snippet={ require('!raw!./sections/date-picker-offdays') }
                    description='DatePicker can block non-factory days'
                    useFrame={ false }
                >
                    <DatePickerOffdaysSection />
                </DemoSection>
                <DemoSection
                    title='DatePicker with limits'
                    snippet={ require('!raw!./sections/date-picker-limits') }
                    description='DatePicker can block dates outside limits'
                    useFrame={ false }
                >
                    <DatePickerLimitsSection />
                </DemoSection>
                <DemoSection
                    title='DatePicker with formats'
                    snippet={ require('!raw!./sections/date-picker-formats') }
                    description='DatePicker support .js formats'
                    useFrame={ false }
                >
                    <DatePickerFormatsSection />
                </DemoSection>
                <DemoSection
                    title='DatePicker with custom week days and month names'
                    snippet={ require('!raw!./sections/date-picker-names') }
                    description='Week days and month names can be customized'
                    useFrame={ false }
                >
                    <DatePickerNamesSection />
                </DemoSection>
            </div>
        );
    }
}
