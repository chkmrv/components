import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import ClickTarget from './click-target';
import Alert from 'components/src/alert/alert';

const ATTACHMENTS = ['left', 'top', 'right', 'bottom'];

export default class AlertSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showAlert: false,
            position: 0,
        };
    }

    componentDidMount() {
        if (this.refs.alert) {
            this.refs.alert.setTarget(ReactDOM.findDOMNode(this.refs.target));
        }
    }

    componentDidUpdate() {
        if (this.refs.alert) {
            this.refs.alert.setTarget(ReactDOM.findDOMNode(this.refs.target));
        }
    }

    render() {
        return (
            <div>
                <ClickTarget
                    ref='target'
                    style={ { margin: '0px auto' } }
                    onClick={ this.handleTargetClick }
                >
                    { `Click me to ${this.state.showAlert ? 'rotate' : 'show'} alert!` }
                </ClickTarget>
                { this.state.showAlert &&
                    <Alert ref='alert' attachment={ ATTACHMENTS[this.state.position] }>
                        { `I am alert and my position is '${ATTACHMENTS[this.state.position]}'` }
                    </Alert>
                }
            </div>
        );
    }

    @autobind
    handleTargetClick() {
        if (!this.state.showAlert) {
            this.setState({ showAlert: true });
        } else {
            let position = this.state.position;
            position = position + 1 <= 3
                ? position + 1
                : 0;

            this.setState({ position });
        }
    }
}
