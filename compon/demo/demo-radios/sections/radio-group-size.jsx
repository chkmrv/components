import React from 'react';

import RadioGroup from 'components/src/radio/radio-group';

const OPTIONS = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
];

export default class RadioGroupSizeSection extends React.Component {
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
                    size='s'
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
