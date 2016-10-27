import React from 'react';
import autobind from 'autobind-decorator';
import omit from '../lib/omit';

import Input from './input';

import { inputMask } from '../lib/inputMask';
import { KEYBOARD_CODES, isUndo, isRedo } from '../lib/keyboard';

require('./masked-input.css');
const cn = require('bem-cn')('kit-masked-input');

export const PATTERNS = {
    phone: '+7 (111) 111-11-11',
    ogrn: '111111111111111',
    inn: '111111111111',
    passport: '1111 111111',
};

export default class MaskedInput extends React.Component {
    static propTypes = {
        value: Input.propTypes.value,
        placeholder: Input.propTypes.placeholder,
        disabled: Input.propTypes.disabled,
        error: Input.propTypes.error,
        errorAttachment: Input.propTypes.errorAttachment,
        mask: React.PropTypes.string.isRequired,
        formatCharacters: React.PropTypes.object,
        maskChar: React.PropTypes.string,
        typeMode: React.PropTypes.oneOf(['insert', 'replace']),
        onClick: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
        onKeyPress: React.PropTypes.func,
        onPaste: React.PropTypes.func,
    };

    static defaultProps = {
        value: '',
        disabled: false,
        error: '',
        typeMode: 'replace',
        /* eslint-disable no-unused-vars */
        onClick: () => {},
        onChange: value => {},
        onFocus: () => {},
        onBlur: () => {},
        onKeyDown: e => {},
        onKeyPress: e => {},
        onPaste: e => {},
        /* eslint-enable no-unused-vars */
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            focused: false,
        };
    }

    componentWillMount() {
        this.mask = this.createMask(this.props);
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.props.mask !== nextProps.mask
            || this.props.formatCharacters !== nextProps.formatCharacters
            || this.props.maskChar !== nextProps.maskChar
            || this.props.typeMode !== nextProps.typeMode
        ) {
            this.mask = this.createMask(nextProps);
        } else {
            if (nextState.focused) {
                this.refs.input.setInputSelection(this.mask.selection);
            }

            this.mask.setValue(nextProps.value);
        }
    }

    componentDidUpdate() {
        this.updateInputSelection();
    }

    render() {
        const { disabled, error } = this.props;
        const props = omit(this.props,
            'value', 'disabled', 'placeholder',
            'onFocus', 'onBlur', 'onChange', 'onKeyDown', 'onKeyPress', 'onPaste'
        );

        return (
            <div
                { ...props }
                className={ cn({ disabled, error: !!error }).mix(this.props.className) }
                onClick={ this.handleClick }
                onMouseEnter={ this.handleMouseEnter }
                onMouseLeave={ this.handleMouseLeave }
            >
                <Input
                    ref='input'
                    className={ cn('control') }
                    value={ this.mask.printValue(this.props.value) }
                    disabled={ disabled }
                    error={ this.props.error }
                    errorAttachment={ this.props.errorAttachment }
                    placeholder={ this.props.placeholder || this.props.mask || '' }
                    onFocus={ this.handleFocus }
                    onBlur={ this.handleBlur }
                    onChange={ this.handleChange }
                    onKeyDown={ this.handleKeyDown }
                    onKeyPress={ this.handleKeyPress }
                    onPaste={ this.handlePaste }
                    onMouseUp={ this.handleMouseUp }
                />
            </div>
        );
    }

    focus() {
        this.refs.input.focus();
    }

    createMask(props) {
        return inputMask(Object.assign(
            {
                pattern: props.mask,
                value: props.value,
                hidePlaceholders: props.hideMaskChars,
                insertMode: props.typeMode === 'insert',
            },
            props.formatCharacters && { formatCharacters: props.formatCharacters },
            props.maskChar && { placeholderChar: props.maskChar }
        ));
    }

    updateMaskSelection() {
        if (!this.state.focused) {
            return;
        }

        this.mask.selection = this.refs.input.getInputSelection();
    }

    updateInputSelection() {
        if (this.state.focused) {
            this.refs.input.setInputSelection(this.mask.selection);
        }
    }

    getDisplayValue() {
        const value = this.mask.getValue();
        return value === this.mask.emptyValue ? '' : value;
    }

    @autobind
    handleClick() {
        this.updateMaskSelection();

        this.props.onClick();
    }

    @autobind
    handleMouseEnter() {
        this.updateMaskSelection();
    }

    @autobind
    handleMouseLeave() {
        this.updateMaskSelection();
    }

    @autobind
    handleMouseUp() {
        const emptyIndex = this.mask.getNextEmptyIndex();
        const selection = this.refs.input.getInputSelection();
        if (selection.end > emptyIndex) {
            this.moveCaret(emptyIndex);
        }
    }

    @autobind
    handleFocus() {
        this.setState({ focused: true }, this.moveCaret(this.mask.getNextEmptyIndex()));

        this.props.onFocus();
    }

    moveCaret(start, end = start) {
        this.mask.selection = { start, end };
        this.updateInputSelection();
    }

    @autobind
    handleBlur() {
        this.setState({
            focused: false,
        });

        this.props.onBlur();
    }

    @autobind
    handleKeyDown(e) {
        const emptyIndex = this.mask.getNextEmptyIndex();
        const selection = this.refs.input.getInputSelection();
        if (e.which === KEYBOARD_CODES.RightArrow) {
            if (emptyIndex === selection.end) {
                e.preventDefault();
            } else if (emptyIndex < selection.end) {
                e.preventDefault();
                this.moveCaret(emptyIndex);
            }
        } else if (e.which === KEYBOARD_CODES.LeftArrow && emptyIndex < selection.end) {
            e.preventDefault();
            this.moveCaret(emptyIndex);
        } else if (e.which === KEYBOARD_CODES.DownArrow) {
            e.preventDefault();
            this.moveCaret(emptyIndex);
        } else if (isUndo(e)) {
            e.preventDefault();
            if (this.mask.undo()) {
                this.props.onChange(this.getDisplayValue());
            }
            return;
        } else if (isRedo(e)) {
            e.preventDefault();
            if (this.mask.redo()) {
                this.props.onChange(this.getDisplayValue());
            }
            return;
        }

        if (e.which === KEYBOARD_CODES.Backspace) {
            e.preventDefault();
            this.updateMaskSelection();
            if (this.mask.backspace()) {
                this.props.onChange(this.getDisplayValue());
            }
        }

        this.props.onKeyDown(e);
    }

    @autobind
    handleKeyPress(e) {
        // Ignore modified key presses
        if (e.metaKey || e.altKey || e.ctrlKey) {
            return;
        }

        e.preventDefault();
        this.updateMaskSelection();
        if (this.mask.input(e.key)) {
            this.props.onChange(this.mask.getValue());
        }

        this.props.onKeyPress(e);
    }

    @autobind
    handlePaste(e) {
        e.preventDefault();
        this.updateMaskSelection();
        // getData value needed for IE also works in FF & Chrome
        if (this.mask.paste(e.clipboardData.getData('Text'))) {
            this.props.onChange(this.mask.getValue());
        }

        this.props.onPaste(e);
    }

    @autobind
    handleChange(value) {
        const maskValue = this.mask.getValue();
        if (value !== maskValue) {
            // Cut or delete operations will have shortened the value
            if (value.length < maskValue.length) {
                const sizeDiff = maskValue.length - value.length;
                this.updateMaskSelection();
                this.mask.selection.end = this.mask.selection.start + sizeDiff;
                this.mask.backspace();
            }

            this.props.onChange(this.getDisplayValue());
        }
    }
}
