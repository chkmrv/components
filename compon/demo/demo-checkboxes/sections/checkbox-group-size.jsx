import React from 'react';

import Checkbox from 'components/src/checkbox/checkbox';
import CheckboxGroup from 'components/src/checkbox/checkbox-group';

export default class CheckboxGroupSizeSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            first: false,
            second: false,
        };
    }

    render() {
        return (
            <div>
                <CheckboxGroup
                    size='s'
                    options={ this.state.options }
                    onChange={ this.handleChange }
                >
                    <Checkbox
                        checked={ this.state.first }
                        onClick={ () => { this.setState({ first: !this.state.first }); } }
                    >
                        First checkbox
                    </Checkbox>
                    <Checkbox
                        checked={ this.state.second }
                        onClick={ () => { this.setState({ second: !this.state.second }); } }
                    >
                        Second checkbox
                    </Checkbox>
                </CheckboxGroup>
            </div>
        );
    }
}
