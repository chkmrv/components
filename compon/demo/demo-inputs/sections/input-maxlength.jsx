import React from 'react';
import Input from 'components/src/input/input';

const STYLE = { paddingBottom: '10px' };

export default class InputMaxLengthSection extends React.Component {
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
                        maxLength={ 10 }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
