import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import Radio from './radio';

import { KEYBOARD_CODES } from '../lib/keyboard';

import './radio-group.css';
const cn = require('bem-cn')('kit-radio-group');

export default class RadioGroup extends React.Component {
    static propTypes = {
        size: Radio.propTypes.size,
        value: React.PropTypes.string,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            value: React.PropTypes.any,
            text: React.PropTypes.node,
            props: React.PropTypes.object,
        })),
        orientation: React.PropTypes.oneOf([ 'vertical', 'horizontal' ]),
        onKeyDown: React.PropTypes.func,
    }

    static defaultProps = {
        size: Radio.defaultProps.size,
        options: [],
        orientation: 'vertical',
        /* eslint-disable no-unused-vars */
        onKeyDown: e => {},
        /* eslint-enable no-unused-vars */
    }

    render() {
        const { size, orientation, value, ...props } = this.props;

        return (
            <div { ...props } className={ cn({ orientation }).mix(this.props.className) }>
                { this.props.options.map(option => (
                    <Radio
                        { ...option.props }
                        size={ size }
                        ref={ `radio-${option.value}` }
                        key={ `radio-${option.value}` }
                        className={ cn('radio') }
                        checked={ value === option.value }
                        onKeyDown={ this.handleKeyDown }
                        onClick={ () => { this.handleRadioClick(option.value); } }
                    >
                        { option.text }
                    </Radio>
                )) }
                { !!this.props.children &&
                    React.Children.map(this.props.children, this.cloneChild)
                }
            </div>
        );
    }

    @autobind
    cloneChild(child) {
        return React.cloneElement(child, {
            className: cn('radio'),
            size: this.props.size
        });
    }

    focus() {
        const radioItem = this.refs[`radio-${this.props.value}`];
        if (!!radioItem) {
            ReactDOM.findDOMNode(radioItem).focus();
        }
    }

    @autobind
    handleRadioClick(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
    @autobind
    handleKeyDown(e) {
        const idx = this.props.options.findIndex(option => option.value === this.props.value);
        switch (e.which) {
            case KEYBOARD_CODES.UpArrow:
            case KEYBOARD_CODES.LeftArrow:
                e.preventDefault();
                if (idx > 0) {
                    this.handleRadioClick(this.props.options[idx - 1].value);
                }
                break;
            case KEYBOARD_CODES.DownArrow:
            case KEYBOARD_CODES.RightArrow:
                e.preventDefault();
                if (idx < this.props.options.length - 1) {
                    this.handleRadioClick(this.props.options[idx + 1].value);
                }
                break;
        }
        this.props.onKeyDown(e);
    }

}
