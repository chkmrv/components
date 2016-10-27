import React from 'react';

import TabGroup from 'components/src/tab/tab-group';

const OPTIONS = [
    { value: '1', text: 'Tab 1' },
    { value: '2', text: 'Tab 2' },
];

const STYLE = {
    backgroundColor: '#cecece',
    padding: '50px',
    textAlign: 'center',
    color: '#000',
    marginTop: '10px',
};

export default class TabGroupSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: '1',
        };
    }

    render() {
        return (
            <div>
                <TabGroup
                    options={ OPTIONS }
                    value={ this.state.value }
                    onChange={ value => {
                        this.setState({ value });
                    } }
                />
                { this.state.value === '1' &&
                    <div style={ STYLE }>
                        Content of tab 1
                    </div>
                }
                { this.state.value === '2' &&
                    <div style={ STYLE }>
                        Content of tab 2
                    </div>
                }
            </div>
        );
    }
}
