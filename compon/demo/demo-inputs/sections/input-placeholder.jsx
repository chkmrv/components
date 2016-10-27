import React from 'react';
import Input from 'components/src/input/input';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class InputPlaceholderSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Input
                        value={ this.state.value }
                        placeholder='With placeholder'
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
