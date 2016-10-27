import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import Alert from '../alert/alert';

import { KEYBOARD_CODES } from '../lib/keyboard';

import './checkbox.css';
const cn = require('bem-cn')('kit-checkbox');

export default class Checkbox extends React.Component {
    static propTypes = {
        size: React.PropTypes.oneOf([ 's', 'm' ]),
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.node,
        errorAttachment: Alert.propTypes.attachment,
        onClick: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
    }

    static defaultProps = {
        size: 'm',
        /* eslint-disable no-unused-vars */
        onClick: e => {},
        onKeyDown: e => {},
        /* eslint-enable no-unused-vars */
    }

    componentDidMount() {
        if (this.refs.error) {
            this.refs.error.setTarget(ReactDOM.findDOMNode(this.refs.text));
        }
    }

    componentDidUpdate() {
        if (this.refs.error) {
            this.refs.error.setTarget(ReactDOM.findDOMNode(this.refs.text));
        }
    }

    render() {
        const { size, checked, disabled, error, ...props } = this.props;

        return (
            <label { ...props }
                className={ cn({ size, checked, disabled }).mix(this.props.className) }
                onClick={ this.handleClick }
                onKeyDown={ this.handleKeyDown }
            >
                { !!error && (
                    <Alert ref='error' attachment={ this.props.errorAttachment }>
                        { error }
                    </Alert>
                ) }
                <div ref='checkbox' className={ cn('control') } tabIndex={ !this.props.disabled ? 0 : null } />
                { this.props.children &&
                    <div ref='text' className={ cn('text') }>
                        { this.props.children }
                    </div>
                }
            </label>
        );
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.checkbox).focus();
    }

    @autobind
    handleClick(e) {
        if (!this.props.disabled) {
            this.props.onClick(e);
        }
    }

    @autobind
    handleKeyDown(e) {
        if (!this.props.disabled && e.which === KEYBOARD_CODES.Space) {
            e.preventDefault();
            this.props.onClick(e);
        }

        this.props.onKeyDown(e);
    }
}
