import React from 'react';
import Input from 'components/src/input/input';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class InputErrorSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 'Clear value to hide error'
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Input
                        value={ this.state.value }
                        error={ !!this.state.value ? 'Some error happened' : null }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
