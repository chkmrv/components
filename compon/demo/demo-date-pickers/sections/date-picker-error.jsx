import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';

const STYLE = { paddingTop: '10px', width: '250px' };

export default class DatePickerErrorSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <DatePicker
                        error={ this.state.value !== moment().format('DD.MM.YYYY') ? 'Set today to hide error' : '' }
                        value={ this.state.value }
                        onChange={ value => { this.setState({ value }); } }
                    />
                </div>
            </div>
        );
    }
}
