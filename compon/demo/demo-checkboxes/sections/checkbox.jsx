import React from 'react';

import Checkbox from 'components/src/checkbox/checkbox';

const STYLE = { paddingTop: '10px' };

export default class CheckboxSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Checkbox
                        checked={ this.state.one }
                        onClick={ () => {
                            this.setState({ one: !this.state.one });
                        } }
                    >
                        Default checkbox 1
                    </Checkbox>
                </div>
                <div style={ STYLE }>
                    <Checkbox
                        checked={ this.state.two }
                        onClick={ () => {
                            this.setState({ two: !this.state.two });
                        } }
                    >
                        Default checkbox 2
                    </Checkbox>
                </div>
                <div style={ STYLE }>
                    <Checkbox
                        checked={ this.state.three }
                        disabled={ true }
                        onClick={ () => {
                            this.setState({ three: !this.state.three });
                        } }
                    >
                        Disabled checkbox
                    </Checkbox>
                </div>
                <div style={ STYLE }>
                    <Checkbox
                        checked={ this.state.four }
                        onClick={ () => {
                            this.setState({ four: !this.state.four });
                        } }
                    >
                        Checkbox with pretty long text, so long enough to wrap around to the second
                        line so you can see how line-height property works along with more short
                        options that cannot do that
                    </Checkbox>
                </div>
                <div style={ STYLE }>
                    <Checkbox
                        size='s'
                        checked={ this.state.five }
                        disabled={ true }
                        onClick={ () => {
                            this.setState({ five: !this.state.five });
                        } }
                    >
                        Small sized
                    </Checkbox>
                </div>
            </div>
        );
    }
}
