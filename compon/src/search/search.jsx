import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import callback from 'react-callback-props-decorator';
import * as theme from '../theme';
import omit from '../lib/omit';

import Icon from '../icon/icon';

require('./search.css');
const cn = theme.className('kit-search');

export default class Search extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.string,
        view: React.PropTypes.oneOf([ 'normal', 'round' ]),
    };

    static defaultProps = {
        value: '',
        disabled: false,
        error: '',
        view: 'normal',
    };

    render() {
        const { disabled, error, view } = this.props;
        const props = omit(this.props,
            'value', 'type', 'disabled', 'placeholder', 'view',
            'onFocus', 'onBlur', 'onChange', 'onKeyDown', 'onKeyPress'
        );

        return (
            <div { ...props } className={ cn({ disabled, view, error: !!error }).mix(this.props.className) }>
                <input
                    { ...this.props }
                    ref='input'
                    className={ cn('control') }
                    value={ this.props.value }
                    disabled={ disabled }
                    placeholder={ this.props.placeholder }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    onChange={ this.handleChange }
                    onKeyDown={ this.handleKeyDown }
                    onKeyPress={ this.handleKeyPress }
                />
                <Icon
                    className={ cn('icon') }
                    tool='search'
                    onClick={ this.handleIconClick }
                />
                { !!this.props.error &&
                    <div className={ cn('message') }>
                        { this.props.error }
                    </div>
                }
            </div>
        );
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.input).focus();
    }

    @autobind
    handleIconClick() {
        if (!this.props.disabled) {
            this.focus();
        }
    }

    @autobind
    handleChange(e) {
        let target = e.target || e.currentTarget;

        if (this.props.onChange) {
            this.props.onChange(target.value);
        }
    }

    @autobind
    @callback
    handleFocus() {

    }

    @autobind
    @callback
    handleBlur() {

    }

    @autobind
    @callback
    handleKeyDown() {

    }

    @autobind
    @callback
    handleKeyPress() {

    }
}
