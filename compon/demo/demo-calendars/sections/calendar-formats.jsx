import React from 'react';
import moment from 'moment';

import Calendar from 'components/src/calendar/calendar';
import DemoExample from '../../demo-example/demo-example';

export default class CalendarFormatsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            typical: moment(),
            typicalFormatted: moment().format('DD.MM.YYYY'),
            custom: moment(),
            customFormatted: moment().format('YYYY-MM-DD'),
            different: moment(),
            differentFormatted: moment().format('MM/DD/YYYY')
        };
    }

    render() {
        return (
            <div>
                <DemoExample
                    header='Default format is DD.MM.YYYY'
                    footer={ [
                        `Out: ${this.state.typicalFormatted}`,
                    ] }
                >
                    <Calendar
                        value={ this.state.typical }
                        onValueChange= { (value, formatted) => {
                            this.setState({
                                typical: value,
                                typicalFormatted: formatted
                            });
                        } }
                    />
                </DemoExample>
                <DemoExample
                    header='With custom format YYYY-MM-DD'
                    footer={ [
                        `Out: ${this.state.customFormatted}`,
                    ] }
                >
                    <Calendar
                        value={ this.state.custom }
                        dateFormat='YYYY-MM-DD'
                        onValueChange= { (value, formatted) => {
                            this.setState({
                                custom: value,
                                customFormatted: formatted
                            });
                        } }
                    />
                </DemoExample>
            </div>
        );
    }
}
