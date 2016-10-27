import React from 'react';
import autobind from 'autobind-decorator';

import CheckboxGroup from 'components/src/checkbox/checkbox-group';

export default class CheckboxGroupOptionsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            options: [
                {
                    value: 'text',
                    checked: false,
                    text: 'Just text'
                },
                {
                    value: 'markup',
                    checked: false,
                    text: <div style={ { backgroundColor: '#cecece', padding: '0px 10px' } }>Markup</div>
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <CheckboxGroup
                    options={ this.state.options }
                    onChange={ this.handleChange }
                />
            </div>
        );
    }

    @autobind
    handleChange(value) {
        let options = [ ...this.state.options ];
        options
            .filter(option => option.value === value)
            .map(option => {
                option.checked = !option.checked;
                return option;
            });

        this.setState({ options });
    }
}
