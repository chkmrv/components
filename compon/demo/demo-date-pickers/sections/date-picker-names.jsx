import React from 'react';
import moment from 'moment';

import DatePicker from 'components/src/date-picker/date-picker';
import DemoExample from '../../demo-example/demo-example';

const STYLE = {
    width: '250px',
};

export default class DatePickerWithNamesSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            weekDays: moment().format('DD.MM.YYYY'),
            monthNames: moment().format('DD.MM.YYYY'),
            day: moment().format('DD.MM.YYYY'),
            weekendDays: moment().format('DD.MM.YYYY'),
        };
    }

    render() {
        return (
            <div>
                <DemoExample header='Custom week days'>
                    <DatePicker style={ STYLE }
                        value={ this.state.weekDays }
                        weekDays={ ['M', 'T', 'W', 'T', 'F', 'S', 'S'] }
                        onChange={ weekDays => { this.setState({ weekDays }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom month names'>
                    <DatePicker style={ STYLE }
                        value={ this.state.monthNames }
                        months={ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
                        onChange={ monthNames => { this.setState({ monthNames }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom first day of week'>
                    <DatePicker style={ STYLE }
                        value={ this.state.day }
                        firstWeekDay={ 5 }
                        onChange={ day => { this.setState({ day }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom weekendDays'>
                    <DatePicker style={ STYLE }
                        value={ this.state.weekendDays }
                        weekendDays={ [ 2, 3 ] }
                        onChange={ weekendDays => { this.setState({ weekendDays }); } }
                    />
                </DemoExample>
            </div>
        );
    }
}
