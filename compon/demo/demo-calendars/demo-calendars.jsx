import React from 'react';

import DemoSection from '../demo-section/demo-section';
import CalendarSection from './sections/calendar';
import CalendarOffdaysSection from './sections/calendar-offdays';
import CalendarLimitsSection from './sections/calendar-limits';
import CalendarFormatsSection from './sections/calendar-formats';
import CalendarNamesSection from './sections/calendar-names';

export default class DemoCalendars extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Calendar'
                    snippet={ require('!raw!./sections/calendar') }
                    description='The simplest type of this component'
                    useFrame={ false }
                >
                    <CalendarSection />
                </DemoSection>
                <DemoSection
                    title='Calendar with offdays'
                    snippet={ require('!raw!./sections/calendar-offdays') }
                    description='Calendar can block non-factory days'
                    useFrame={ false }
                >
                    <CalendarOffdaysSection />
                </DemoSection>
                <DemoSection
                    title='Calendar with limits'
                    snippet={ require('!raw!./sections/calendar-limits') }
                    description='Calendar can block dates outside limits'
                    useFrame={ false }
                >
                    <CalendarLimitsSection />
                </DemoSection>
                <DemoSection
                    title='Calendar with formats'
                    snippet={ require('!raw!./sections/calendar-formats') }
                    description='Calendar support .js formats'
                    useFrame={ false }
                >
                    <CalendarFormatsSection />
                </DemoSection>
                <DemoSection
                    title='Calendar with custom week days and month names'
                    snippet={ require('!raw!./sections/calendar-names') }
                    description='Week days and month names can be customized'
                    useFrame={ false }
                >
                    <CalendarNamesSection />
                </DemoSection>
            </div>
        );
    }
}
