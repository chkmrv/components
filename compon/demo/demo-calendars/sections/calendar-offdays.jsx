import React from 'react';
import moment from 'moment';

import Calendar from 'components/src/calendar/calendar';
import DemoExample from '../../demo-example/demo-example';

export default class CalendarOffdaysSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment(),
        };
    }

    render() {
        return (
            <DemoExample header='With moment.js'>
                <Calendar
                    value={ this.state.value }
                    offDays={ [
                        moment().subtract(10, 'day'),
                        moment().subtract(5, 'day'),
                        moment().add(5, 'day'),
                        moment().add(10, 'day')
                    ] }
                    onValueChange={ value => { this.setState({ value }); } }
                />
            </DemoExample>
        );
    }
}
