import React from 'react';

import Radio from 'components/src/radio/radio';

const STYLE = { paddingTop: '10px' };

export default class RadioSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <Radio
                        checked={ this.state.value === 'one' }
                        onClick={ () => {
                            this.setState({ value: 'one' });
                        } }
                    >
                        Default radio 1
                    </Radio>
                </div>
                <div style={ STYLE }>
                    <Radio
                        checked={ this.state.value === 'two' }
                        onClick={ () => {
                            this.setState({ value: 'two' });
                        } }
                    >
                        Default radio 2
                    </Radio>
                </div>
                <div style={ STYLE }>
                    <Radio
                        checked={ this.state.value === 'three' }
                        disabled={ true }
                        onClick={ () => {
                            this.setState({ value: 'three' });
                        } }
                    >
                        Disabled radio
                    </Radio>
                </div>
                <div style={ STYLE }>
                    <Radio
                        checked={ this.state.value === 'four' }
                        onClick={ () => {
                            this.setState({ value: 'four' });
                        } }
                    >
                        Radio with pretty long text, so long enough to wrap around to the second
                        line so you can see how line-height property works along with more short
                        options that cannot do that
                    </Radio>
                </div>
                <div style={ STYLE }>
                    <Radio
                        size='s'
                        checked={ this.state.value === 'five' }
                        disabled={ true }
                        onClick={ () => {
                            this.setState({ value: 'five' });
                        } }
                    >
                        Small sized
                    </Radio>
                </div>
            </div>
        );
    }
}
