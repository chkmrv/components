import React from 'react';
import Input from 'components/src/input/input';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class InputSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            one: 'Normal input',
            two: 'Disabled input',
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Input
                        value={ this.state.one }
                        onChange={ one => {
                            this.setState({ one });
                        } }
                    />
                </div>
                <div style={ STYLE }>
                    <Input
                        value={ this.state.two }
                        disabled={ true }
                        onChange={ two => {
                            this.setState({ two });
                        } }
                    />
                </div>
            </div>
        );
    }
}
