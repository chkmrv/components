import React from 'react';

import Checkbox from 'components/src/checkbox/checkbox';

const STYLE = { paddingTop: '10px' };

export default class CheckboxErrorSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: false,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Checkbox
                        checked={ this.state.value }
                        error={ this.state.value && 'You can\'t always get what you want' }
                        onClick={ () => { this.setState({ value: !this.state.value }); } }
                    >
                        { `Click me to ${this.state.value ? 'hide' : 'show' } error` }
                    </Checkbox>
                </div>
            </div>
        );
    }
}
