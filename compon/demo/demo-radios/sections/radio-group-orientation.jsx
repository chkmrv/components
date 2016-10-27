import React from 'react';

import RadioGroup from 'components/src/radio/radio-group';

const VERTICAL_OPTIONS = [
    { value: '1', text: 'Vertically oriented value 1' },
    { value: '2', text: 'Vertically oriented value 2' },
];

const HORIZONTAL_OPTIONS = [
    { value: '1', text: 'Horizontally oriented value 1' },
    { value: '2', text: 'Horizontally oriented value 2' },
];

const STYLE = { paddingTop: '30px' };

export default class RadioGroupOrientationSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            verticalValue: null,
            horizontalValue: null,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <RadioGroup
                        options={ VERTICAL_OPTIONS }
                        orientation={ 'vertical' }
                        value={ this.state.verticalValue }
                        onChange={ verticalValue => {
                            this.setState({ verticalValue });
                        } }
                    />
                </div>
                <div style={ STYLE }>
                    <RadioGroup
                        options={ HORIZONTAL_OPTIONS }
                        orientation={ 'horizontal' }
                        value={ this.state.horizontalValue }
                        onChange={ horizontalValue => {
                            this.setState({ horizontalValue });
                        } }
                    />
                </div>
            </div>
        );
    }
}
