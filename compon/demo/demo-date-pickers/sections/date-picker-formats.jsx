import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';

const STYLE = { paddingTop: '10px', width: '250px' };

export default class DatePickerFormatsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: moment().format('DD/MM/YYYY'),
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <DatePicker
                        value={ this.state.value }
                        dateFormat='DD/MM/YYYY'
                        onChange={ value => { this.setState({ value }); } }
                    />
                </div>
            </div>
        );
    }
}
