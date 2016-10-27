import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';
import DemoExample from '../../demo-example/demo-example';

const STYLE = {
    width: '250px',
};

export default class DatePickerLimitsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment().format('DD.MM.YYYY'),
            minDate: moment().subtract(10, 'day'),
            maxDate: moment().add(10, 'day'),
        };
    }

    render() {
        return (
            <div>
                <DemoExample
                    header={
                        `minDate: ${this.state.minDate.format('DD.MM.YYYY')} maxDate: ${this.state.maxDate.format('DD.MM.YYYY')}`
                    }
                >
                    <DatePicker style={ STYLE }
                        value={ this.state.value }
                        minDate={ this.state.minDate }
                        maxDate={ this.state.maxDate }
                        onChange={ value => { this.setState({ value }); } }
                    />
                </DemoExample>
            </div>
        );
    }
}
