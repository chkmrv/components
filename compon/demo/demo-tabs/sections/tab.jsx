import React from 'react';

import Tab from 'components/src/tab/tab';

const STYLE = { paddingTop: '10px' };

export default class ButtonSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            selected: null
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Tab
                        selected={ this.state.selected === 'first' }
                        onClick={ () => { this.setState({ selected: 'first' }); } }
                        text='First'
                    />
                </div>
                <div style={ STYLE }>
                    <Tab
                        selected={ this.state.selected === 'second' }
                        onClick={ () => { this.setState({ selected: 'second' }); } }
                        text='Second'
                    />
                </div>
            </div>
        );
    }
}
