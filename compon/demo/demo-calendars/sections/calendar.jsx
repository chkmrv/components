import React from 'react';
import moment from 'moment';

import Calendar from 'components/src/calendar/calendar';

export default class CalendarSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment(),
        };
    }

    render() {
        return (
            <div>
                <Calendar
                    value={ this.state.value }
                    onValueChange={ value => { this.setState({ value }); } }
                />
            </div>
        );
    }
}
