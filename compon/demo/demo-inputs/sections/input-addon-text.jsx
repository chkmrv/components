import React from 'react';
import Input from 'components/src/input/input';

const STYLE = {
    width: '250px',
};

export default class InputAddonText extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '',
            addonText: 'Руб'
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Input
                        value={ this.state.value }
                        addonText={ this.state.addonText }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
