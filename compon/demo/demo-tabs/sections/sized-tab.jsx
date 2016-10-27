import React from 'react';

import Tab from 'components/src/tab/tab';

const STYLE = { paddingTop: '10px' };

export default class SizedTabSection extends React.Component {
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
                        text='Medium size'
                        size='medium'
                    />
                </div>
                <div style={ STYLE }>
                    <Tab
                        selected={ this.state.selected === 'second' }
                        onClick={ () => { this.setState({ selected: 'second' }); } }
                        text='Large size'
                        size='large'
                    />
                </div>
            </div>
        );
    }
}
