import React from 'react';
import moment from 'moment';

import Calendar from 'components/src/calendar/calendar';
import DemoExample from '../../demo-example/demo-example';

export default class CalendarLimitsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment(),
            minDate: moment().subtract(10, 'day'),
            maxDate: moment().add(10, 'day'),
        };
    }

    render() {
        return (
            <div>
                <DemoExample
                    footer={ [
                        `minDate: ${this.state.minDate.format('YYYY-MM-DD')}`,
                        `maxDate: ${this.state.maxDate.format('YYYY-MM-DD')}`,
                    ] }
                >
                    <Calendar
                        value={ this.state.value }
                        minDate={ this.state.minDate }
                        maxDate={ this.state.maxDate }
                        onValueChange={ value => { this.setState({ value }); } }
                    />
                </DemoExample>
            </div>
        );
    }
}
