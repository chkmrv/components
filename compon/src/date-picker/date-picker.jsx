import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import autobind from 'autobind-decorator';

import omit from '../lib/omit';

import MaskedInput from '../input/masked-input';
import Popup from '../popup/popup-core';
import Calendar from '../calendar/calendar';
import Icon from '../icon/icon';

import { KEYBOARD_CODES } from '../lib/keyboard';

import './date-picker.css';
const cn = require('bem-cn')('kit-date-picker');

const MASK_REPLACE_RE = /(M|D|Y)/g;
const MASK_REPLACE_CHAR = '1';

export default class DatePicker extends React.Component {
    static propTypes = {
        /* input props */
        value: MaskedInput.propTypes.value,
        placeholder: MaskedInput.propTypes.placeholder,
        disabled: MaskedInput.propTypes.disabled,
        error: MaskedInput.propTypes.error,
        errorAttachment: MaskedInput.propTypes.errorAttachment,

        /* calendar props */
        dateFormat: Calendar.propTypes.dateFormat,
        minDate: Calendar.propTypes.minDate,
        maxDate: Calendar.propTypes.maxDate,
        sixWeeks: Calendar.propTypes.sixWeeks,
        showArrows: Calendar.propTypes.showArrows,
        offDays: Calendar.propTypes.offDays,
        weekDays: Calendar.propTypes.weekDays,
        monthNames: Calendar.propTypes.monthNames,
        firstWeekDay: Calendar.propTypes.firstWeekDay,
        weekendDays: Calendar.propTypes.weekendDays,

        onClick: React.PropTypes.func,
        onChange: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onKeyDown: React.PropTypes.func,
    }

    static defaultProps = {
        disabled: false,
        dateFormat: 'DD.MM.YYYY',
        /* eslint-disable no-unused-vars */
        onClick: e => {},
        onChange: formatted => {},
        onFocus: e => {},
        onBlur: e => {},
        onKeyDown: e => {},
        /* eslint-enable no-unused-vars */
    }

    constructor(props) {
        super(props);

        this.state = {
            isOpened: false,
        };
    }

    componentDidMount() {
        this.ensureCalendarPopupTarget();
    }

    componentDidUpdate() {
        this.ensureCalendarPopupTarget();
    }

    render() {
        const { disabled } = this.props;

        return (
            <div { ...omit(this.props, Object.keys(DatePicker.propTypes)) }
                className={ cn({ disabled }).mix(this.props.className) }
            >
                { this.renderInput() }
                { this.renderIcon() }
                { this.state.isOpened && this.renderCalendar() }
            </div>
        );
    }

    renderInput() {
        return (
            <div className={ cn('input') }>
                <MaskedInput
                    ref='input'
                    value={ this.props.value }
                    mask={ this.props.dateFormat.replace(MASK_REPLACE_RE, MASK_REPLACE_CHAR) }
                    placeholder={ this.props.placeholder }
                    disabled={ this.props.disabled }
                    error={ this.props.error }
                    errorAttachment={ this.props.errorAttachment }
                    onClick={ this.handleInputClick }
                    onChange={ this.handleInputChange }
                    onFocus={ this.handleInputFocus }
                    onBlur={ this.handleInputBlur }
                    onKeyDown={ this.handleKeyDown }
                />
            </div>
        );
    }

    renderIcon() {
        return (
            <div className={ cn('icon') } onClick={ this.handleIconClick }>
                <Icon tool='calendar' />
            </div>
        );
    }

    renderCalendar() {
        const date = moment(this.props.value, this.props.dateFormat, true);

        return (
            <Popup
                ref='popup'
                className={ cn('calendar-layout') }
                onClickOutside={ this.handlePopupClickOutside }
                targetAttachment='bottom left'
                popupAttachment='top left'
                preventMouseDown={ true }
                popupContent={
                    <Calendar
                        ref='calendar'
                        value={ date.isValid() ? date.hours(12) : null }
                        dateFormat={ this.props.dateFormat }
                        minDate={ this.props.minDate }
                        maxDate={ this.props.maxDate }
                        sixWeeks={ this.props.sixWeeks }
                        showArrows={ this.props.showArrows }
                        offDays={ this.props.offDays }
                        weekDays={ this.props.weekDays }
                        monthNames={ this.props.monthNames }
                        firstWeekDay={ this.props.firstWeekDay }
                        weekendDays={ this.props.weekendDays }
                        onValueChange={ this.handleCalendarValueChange }
                    />
                }
            />
        );
    }

    focus() {
        this.refs.input.focus();
    }

    ensureCalendarPopupTarget() {
        if (this.state.isOpened) {
            const input = ReactDOM.findDOMNode(this.refs.input);
            this.refs.popup.setTarget(input);
            this.refs.popup.setHidePartner(input);
        }
    }

    @autobind
    handleInputClick(e) {
        if (!this.props.disabled) {
            this.setState({ isOpened: true });
            this.props.onClick(e);
        }
    }

    @autobind
    handleInputChange(value) {
        this.props.onChange(value);
    }

    @autobind
    handleInputFocus(e) {
        this.setState({ isOpened: true });

        this.props.onFocus(e);
    }

    @autobind
    handleInputBlur(e) {
        this.setState({ isOpened: false });

        this.props.onBlur(e);
    }

    @autobind
    handleIconClick() {
        if (!this.props.disabled) {
            this.refs.input.focus();
        }
    }

    @autobind
    handlePopupClickOutside() {
        this.setState({ isOpened: false });
    }

    @autobind
    handleCalendarValueChange(value, formatted) {
        this.setState({ isOpened: false });

        this.props.onChange(formatted);
    }

    @autobind
    handleKeyDown(e) {
        if (!this.props.disabled && e.which === KEYBOARD_CODES.Enter) {
            this.props.onKeyDown(e);
        }
    }
}
