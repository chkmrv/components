import React from 'react';
import Dropdown from 'components/src/dropdown/dropdown';

const STYLE = { paddingBottom: '10px' };
const DROPDOWN_STYLE = { width: '500px' };
const OPTION_STYLE = { color: '#ff0000' };

const OPTIONS = [
    {
        value: 'first-text',
        text: 'First text option'
    },
    {
        value: 'second-text',
        text: 'Second text option'
    },
    {
        value: 'first-markup',
        text: <div style={ OPTION_STYLE }>First markup option</div>
    },
    {
        value: 'second-markup',
        text: <div style={ OPTION_STYLE }>Second markup option</div>
    },
];

export default class DropDownSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: null,
            disabled: null,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Dropdown
                        style={ DROPDOWN_STYLE }
                        options={ OPTIONS }
                        value={ this.state.value }
                        placeholder='Select something'
                        onChange={ value => { this.setState({ value }); } }
                    />
                </div>
                <div style={ STYLE }>
                    <Dropdown
                        style={ DROPDOWN_STYLE }
                        options={ OPTIONS }
                        value={ this.state.disabled }
                        placeholder='Disabled dropdown'
                        disabled={ true }
                        onChange={ disabled => { this.setState({ disabled }); } }
                    />
                </div>
            </div>
        );
    }
}
