import React from 'react';

import RadioGroup from 'components/src/radio/radio-group';

const OPTIONS = [
    { value: 'text', text: 'Just text' },
    { value: 'markup', text: <div style={ { backgroundColor: '#cecece', padding: '0px 10px' } }>Markup</div> },
];

export default class RadioGroupSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <RadioGroup
                    options={ OPTIONS }
                    value={ this.state.value }
                    onChange={ value => {
                        this.setState({ value });
                    } }
                />
            </div>
        );
    }
}
