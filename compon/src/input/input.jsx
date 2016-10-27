import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import callback from 'react-callback-props-decorator';
import { getSelection, setSelection } from 'react/lib/ReactInputSelection';
import * as theme from '../theme';
import omit from '../lib/omit';

import Alert from '../alert/alert';

require('./input.css');
const cn = theme.className('kit-input');

export default class Input extends React.Component {
    static propTypes = {
        type: React.PropTypes.oneOf(['text', 'password', 'number']),
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.node,
        errorAttachment: Alert.propTypes.attachment,
        addonText: React.PropTypes.node,
        maxLength: React.PropTypes.number,
    };

    static defaultProps = {
        type: 'text',
        value: '',
        disabled: false,
        error: '',
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            isFocused: false,
        };
    }

    componentDidMount() {
        if (this.refs.error) {
            this.refs.error.setTarget(ReactDOM.findDOMNode(this.refs.input));
        }
    }

    componentDidUpdate() {
        if (this.refs.error) {
            this.refs.error.setTarget(ReactDOM.findDOMNode(this.refs.input));
        }
    }

    render() {
        const { disabled, error } = this.props;
        const { isFocused: focused } = this.state;
        const props = omit(this.props,
            'value', 'type', 'disabled', 'placeholder',
            'onFocus', 'onBlur', 'onChange', 'onKeyDown', 'onKeyPress'
        );

        return (
            <div { ...props } className={ cn({ disabled, focused, error: !!error }).mix(this.props.className) }>
                { !!error && focused &&
                    <Alert ref='error' attachment={ this.props.errorAttachment }>
                        { this.props.error }
                    </Alert>
                }
                { !!this.props.addonText &&
                    <span className={ cn('addon-text') }>
                        { this.props.addonText }
                    </span>
                }
                <input
                    ref='input'
                    className={ cn('control') }
                    value={ this.props.value }
                    type={ this.props.type }
                    disabled={ disabled }
                    placeholder={ this.props.placeholder }
                    maxLength={ this.props.maxLength }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    onChange={ this.handleChange }
                    onKeyDown={ this.handleKeyDown }
                    onKeyPress={ this.handleKeyPress }
                    onPaste={ this.handlePaste }
                />
            </div>
        );
    }

    focus() {
        ReactDOM.findDOMNode(this.refs.input).focus();
    }

    setInputSelection(selection) {
        setSelection(ReactDOM.findDOMNode(this.refs.input), selection);
    }

    getInputSelection() {
        return getSelection(ReactDOM.findDOMNode(this.refs.input));
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
        this.setState({
            isFocused: true,
        });
    }

    @autobind
    @callback
    handleBlur() {
        this.setState({
            isFocused: false,
        });
    }

    @autobind
    @callback
    handleKeyDown() {

    }

    @autobind
    @callback
    handleKeyPress() {

    }

    @autobind
    @callback
    handlePaste() {

    }
}
