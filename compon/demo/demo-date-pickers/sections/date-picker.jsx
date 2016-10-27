import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';

const STYLE = { paddingTop: '10px', width: '250px' };

export default class DatePickerSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: null,
            disabled: moment().format('DD.MM.YYYY'),
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <DatePicker
                        value={ this.state.value }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
                <div style={ STYLE }>
                    <DatePicker
                        disabled={ true }
                        value={ this.state.value }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
