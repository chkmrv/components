import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';
import DemoExample from '../../demo-example/demo-example';

const OFF_DAYS = [
    moment().subtract(10, 'day'),
    moment().subtract(5, 'day'),
    moment().add(5, 'day'),
    moment().add(10, 'day')
];

export default class DatePickerOffdaysSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment().format('DD.MM.YYYY'),
        };
    }

    render() {
        return (
            <DemoExample
                header={ `Blocked days: ${OFF_DAYS.map(day => day.format('DD.MM.YYYY')).join(', ')}` }
            >
                <DatePicker style={ { width: '250px' } }
                    value={ this.state.value }
                    offDays={ OFF_DAYS }
                    onChange={ value => { this.setState({ value }); } }
                />
            </DemoExample>
        );
    }
}
