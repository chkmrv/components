import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import * as theme from '../theme';

import { KEYBOARD_CODES } from '../lib/keyboard';

import './radio.css';
const cn = theme.className('kit-radio');

export default class Radio extends React.Component {
    static propTypes = {
        size: React.PropTypes.oneOf([ 's', 'm' ]),
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
    }

    static defaultProps = {
        size: 'm',
        onClick: () => {},
        /* eslint-disable no-unused-vars */
        onKeyDown: e => {},
        /* eslint-enable no-unused-vars */
    }

    render() {
        const { size, checked, disabled, ...props } = this.props;

        return (
            <label { ...props }
                className={ cn({ size, checked, disabled }).mix(this.props.className) }
                onClick={ this.handleClick }
                onKeyDown={ this.handleKeyDown }
            >
                <div ref='radio' className={ cn('control') } tabIndex={ !this.props.disabled && !this.props.checked ? 0 : null } />
                { this.props.children &&
                    <div className={ cn('text') }>
                        { this.props.children }
                    </div>
                }
            </label>
        );
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.radio).focus();
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
            this.props.onClick();
        }

        this.props.onKeyDown(e);
    }
}
