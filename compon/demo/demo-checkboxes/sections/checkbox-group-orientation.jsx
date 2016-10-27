import React from 'react';

import CheckboxGroup from 'components/src/checkbox/checkbox-group';

const STYLE = { paddingTop: '30px' };

export default class CheckboxGroupOrientationSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            verticalOptions: [
                { value: '1', checked: false, text: 'Vertically oriented value 1' },
                { value: '2', checked: false, text: 'Vertically oriented value 2' },
            ],
            horizontalOptions: [
                { value: '1', checked: false, text: 'Horizontally oriented value 1' },
                { value: '2', checked: false, text: 'Horizontally oriented value 2' },
            ],
        };
    }

    render() {
        return (
            <div>
                <div>
                    <CheckboxGroup
                        options={ this.state.verticalOptions }
                        orientation={ 'vertical' }
                        onChange={ value => { this.handleChange(this.state.verticalOptions, value); } }
                    />
                </div>
                <div style={ STYLE }>
                    <CheckboxGroup
                        options={ this.state.horizontalOptions }
                        orientation={ 'horizontal' }
                        onChange={ value => { this.handleChange(this.state.horizontalOptions, value); } }
                    />
                </div>
            </div>
        );
    }

    handleChange(options, value) {
        let newOptions = [ ...options ];
        newOptions
            .filter(option => option.value === value)
            .map(option => {
                option.checked = !option.checked;
                return option;
            });

        this.setState({ options: newOptions });
    }
}
