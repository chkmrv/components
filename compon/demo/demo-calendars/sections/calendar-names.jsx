import React from 'react';
import moment from 'moment';

import Calendar from 'components/src/calendar/calendar';
import DemoExample from '../../demo-example/demo-example';

export default class CalendarWithNamesSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            weekDays: moment(),
            monthNames: moment(),
            day: moment(),
            weekendDays: moment(),
        };
    }

    render() {
        return (
            <div>
                <DemoExample header='Custom week days'>
                    <Calendar
                        value={ this.state.weekDays }
                        weekDays={ ['M', 'T', 'W', 'T', 'F', 'S', 'S'] }
                        onValueChange={ weekDays => { this.setState({ weekDays }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom month names'>
                    <Calendar
                        value={ this.state.monthNames }
                        months={ ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
                        onValueChange={ monthNames => { this.setState({ monthNames }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom first day of week'>
                    <Calendar
                        value={ this.state.day }
                        firstWeekDay={ 5 }
                        onValueChange={ day => { this.setState({ day }); } }
                    />
                </DemoExample>
                <DemoExample header='Custom weekendDays'>
                    <Calendar
                        value={ this.state.weekendDays }
                        weekendDays={ [ 2, 3 ] }
                        onValueChange={ weekendDays => { this.setState({ weekendDays }); } }
                    />
                </DemoExample>
            </div>
        );
    }
}
