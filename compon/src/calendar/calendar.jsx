import React from 'react';
import autobind from 'autobind-decorator';
import moment from 'moment';

import YearPicker from './year-picker';

import './calendar.css';
import range from 'lodash/range';

const cn = require('bem-cn')('calendar');

const ATTR_DAY = 'data-day';
const ATTR_DIRECTION = 'data-direction';
const ATTR_DISABLED = 'data-disabled';

const DAYS_IN_WEEK = 7;

const WEEK_DAYS = [0, 1, 2, 3, 4, 5, 6];

export default class Calendar extends React.Component {
    static propTypes = {
        value: React.PropTypes.object,
        minDate: React.PropTypes.object,
        maxDate: React.PropTypes.object,
        sixWeeks: React.PropTypes.bool,
        showArrows: React.PropTypes.bool,
        onValueChange: React.PropTypes.func,
        onMonthChange: React.PropTypes.func,

        offDays: React.PropTypes.arrayOf(React.PropTypes.object),
        weekDays: React.PropTypes.arrayOf(React.PropTypes.string),
        monthNames: React.PropTypes.arrayOf(React.PropTypes.string),
        firstWeekDay: React.PropTypes.oneOf(WEEK_DAYS),
        weekendDays: React.PropTypes.arrayOf(React.PropTypes.oneOf(WEEK_DAYS)),
        dateFormat: React.PropTypes.string,
    }

    static defaultProps = {
        dateFormat: 'DD.MM.YYYY',
        weekDays: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
        monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
        firstWeekDay: 0,
        offDays: [],
        weekendDays: [ 5, 6 ],
        showArrows: true
    };

    static memoizedFirstWeekDays = { };

    constructor(props, context) {
        super(props, context);

        this.state = {
            date: this.calculateDate(props.value, props.minDate, props.maxDate),
            isYearOpened: false,
        };
    }

    componentWillMount() {
        this.offDays = this.props.offDays.map(offDay => this.parseDate(offDay));

        if (this.props.value) {
            this.value = this.parseDate(this.props.value);
        }

        if (this.props.minDate) {
            this.minDate = this.parseDate(this.props.minDate);
            this.value = this.value ? this.parseDate(moment.max([this.value, this.minDate])) : null;
        }
        if (this.props.maxDate) {
            this.maxDate = this.parseDate(this.props.maxDate);
            this.value = this.value ? this.parseDate(moment.min([this.value, this.maxDate])) : null;
        }

        if (this.props.firstWeekDay) {
            this.weekDays = this.props.weekDays.slice(this.props.firstWeekDay).concat(
                this.props.weekDays.slice(0, this.props.firstWeekDay)
            );
            this.weekendDays = this.props.weekendDays.map(day => {
                return (day + DAYS_IN_WEEK - this.props.firstWeekDay) % DAYS_IN_WEEK;
            });
        } else {
            this.weekDays = this.props.weekDays;
            this.weekendDays = this.props.weekendDays;
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            if (nextProps.value) {
                this.value = this.parseDate(nextProps.value);
            } else {
                this.value = null;
            }

            this.setState({
                date: this.calculateDate(nextProps.value, nextProps.minDate, nextProps.maxDate),
            });
        }
    }

    componentWillUpdate(nextProps) {
        if (this.props.offDays !== nextProps.offDays) {
            this.offDays = nextProps.offDays.map(offDay => this.parseDate(offDay));
        }

        if (this.props.minDate !== nextProps.minDate) {
            if (nextProps.minDate) {
                this.minDate = this.parseDate(nextProps.minDate);
                this.value = this.value ? this.parseDate(moment.max([this.value, this.minDate])) : null;
            } else {
                this.minDate = null;
            }
        }

        if (this.props.maxDate !== nextProps.maxDate) {
            if (nextProps.maxDate) {
                this.maxDate = this.parseDate(nextProps.maxDate);
                this.value = this.value ? this.parseDate(moment.min([this.value, this.maxDate])) : null;
            } else {
                this.maxDate = null;
            }
        }

        if (this.props.weekDays !== nextProps.weekDays) {
            this.weekDays = nextProps.weekDays;
        }

        if (this.props.weekendDays !== nextProps.weekendDays) {
            this.weekendDays = nextProps.weekendDays;
        }

        if (this.props.firstWeekDay !== nextProps.firstWeekDay) {
            if (nextProps.firstWeekDay) {
                this.weekDays = this.weekDays.slice(nextProps.firstWeekDay).concat(
                    this.weekDays.slice(0, nextProps.firstWeekDay)
                );
                this.weekendDays = this.weekendDays.map(day => {
                    return (day + DAYS_IN_WEEK - nextProps.firstWeekDay) % DAYS_IN_WEEK;
                });
            }
        }
    }

    render() {
        return (
            <div className={ cn }>
                <div className={ cn('container') }>
                    { this.renderHead() }
                    { this.renderLayout() }
                    <div className={ cn('content') }>
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }

    renderHead() {
        return (
            <div className={ cn('head') }>
                { this.renderHeadMonth() }
                { this.renderHeadYear() }
            </div>
        );
    }

    renderHeadMonth() {
        const prevMonthEnabled = !this.minDate || this.state.date.isAfter(this.minDate, 'month');
        const nextMonthEnabled = !this.maxDate || this.state.date.isBefore(this.maxDate, 'month');

        return (
            <div className={ cn('month') }>
                <div
                    className={ cn('month-arrow', { direction: 'left', disabled: !prevMonthEnabled }) }
                    data-direction='left'
                    data-disabled={ !prevMonthEnabled }
                    onClick={ this.handleMonthArrowClick }
                />
                <div className={ cn('month-name') }>
                    { this.props.monthNames[this.state.date.month()] }
                </div>
                <div
                    className={ cn('month-arrow', { direction: 'right', disabled: !nextMonthEnabled }) }
                    data-direction='right'
                    data-disabled={ !nextMonthEnabled }
                    onClick={ this.handleMonthArrowClick }
                />
            </div>
        );
    }

    renderHeadYear() {
        return (
            <div className={ cn('year') }>
                <div className={ cn('year-number') } onClick={ this.handleYearNumberClick }>
                    { this.state.date.year() }
                </div>
                <div
                    className={ cn('year-arrow', { direction: 'down' }) }
                    onClick={ this.handleYearArrowClick }
                />
                { this.state.isYearOpened &&
                    <YearPicker
                        className={ cn('year-picker') }
                        minYear={ this.minDate ? this.minDate.year() : null }
                        maxYear={ this.maxDate ? this.maxDate.year() : null }
                        onYearClick={ this.handleYearClick }
                        onClickOutside={ this.handleYearClickOutside }
                    >
                        <div className={ cn('year-number') }>
                            { this.state.date.year() }
                        </div>
                        <div
                            className={ cn('year-arrow', { direction: 'up' }) }
                            onClick={ this.handleYearArrowClick }
                        />
                    </YearPicker>
                }
            </div>
        );
    }

    renderLayout() {
        let rows = this.renderMonth();

        return (
            <table className={ cn('layout') }>
                <tbody onClick={ this.handleLayoutClick } onMouseOver={ this.handleDayHover }>
                    <tr className={ cn('daynames') }>{ this.renderShortWeekdays() }</tr>
                    { rows.map((row, i) => (
                        <tr key={ 'week' + i } className={ cn('week') }>{ row }</tr>
                    )) }
                    { this.props.sixWeeks && rows.length < 6 &&
                        <tr key={ 'row6' } className={ cn('week') }>
                            { range(7).map(i => (
                                <td className={ cn('day') } key={i}>
                                    <div className={ cn('day-inner') }/>
                                </td>
                            )) }
                        </tr>
                    }
                </tbody>
            </table>
        );
    }

    renderShortWeekdays() {
        return this.weekDays.map((name, i) => {
            let type = this.weekendDays.filter(day => day === i).length > 0 ? 'weekend' : '';

            return (
                <th key={ 'dayname' + i } className={ cn('dayname', { type }) }>
                    { name }
                </th>
            );
        });
    }

    renderMonth() {
        return this.calculateWeeks(this.state.date).map(this.renderWeek);
    }

    @autobind
    renderWeek(week) {
        let row = [];
        for (let i = 0; i < week.length; i++) {
            row.push(this.renderDay(week[i], i));
        }

        return row;
    }

    renderDay(day, i) {
        let isOff = !this.isDateSelectable(day);
        let isWeekend = this.weekendDays.filter(day => day === i).length > 0;

        let dayCnProps = {};

        if (isOff && isWeekend) {
            dayCnProps.type = 'weekend-off';
        } else if (isOff) {
            dayCnProps.type = 'off';
        } else if (isWeekend) {
            dayCnProps.type = 'weekend';
        }

        if (day) {
            dayCnProps.today = day.isSame(moment(), 'day');
            dayCnProps.selected = this.value && day.isSame(this.value, 'day');
        }

        let dataDay = day && !isOff
            ? day.format(this.props.dateFormat)
            : null;

        return (
            <td key={ 'day' + i } className={ cn('day', dayCnProps ) } data-day={ dataDay }>
                <div className={ cn('day-inner') } data-day={ dataDay }>
                    { day ? day.date() : '' }
                </div>
            </td>
        );
    }

    calculateDate(val, minDate, maxDate) {
        let date;
        if (!!val) {
            date = this.parseDate(val);
            if (!date || !date.isValid()) {
                date = moment().startOf('year').hours(12);
            }
            if (!!minDate && date.isBefore(minDate)) {
                date = minDate;
            }
            if (!!maxDate && date.isAfter(maxDate)) {
                date = maxDate;
            }
        } else {
            date = moment().startOf('day').hours(12);
        }

        return date;
    }

    calculateWeeks(monthDate) {
        const memoizedFirstWeekDay = Calendar.memoizedFirstWeekDays[this.props.firstWeekDay] || { };
        const key = monthDate.format('YYYY.MM');
        if (memoizedFirstWeekDay[key]) {
            return memoizedFirstWeekDay[key];
        }

        const date = moment(monthDate);
        const lastWeekDayNumber = DAYS_IN_WEEK - this.props.firstWeekDay - 1;

        let weeks = [];
        let week = new Array(DAYS_IN_WEEK);
        let weekDayNumber;
        for (date.date(1); date.month() === monthDate.month(); date.date(date.date() + 1)) {
            weekDayNumber = (date.day() + lastWeekDayNumber) % DAYS_IN_WEEK; // Получаем 0 - пн, 1 - вт, и т.д.
            week[weekDayNumber] = moment(date).startOf('day').hours(12);

            if (weekDayNumber === DAYS_IN_WEEK - 1) {
                weeks.push(week);
                week = new Array(DAYS_IN_WEEK);
            }
        }

        if (weekDayNumber !== DAYS_IN_WEEK - 1) {
            weeks.push(week);
        }

        memoizedFirstWeekDay[key] = weeks;
        if (!Calendar.memoizedFirstWeekDays[this.props.firstWeekDay]) {
            Calendar.memoizedFirstWeekDays[this.props.firstWeekDay] = memoizedFirstWeekDay;
        }

        return weeks;
    }

    parseDate(val) {
        return typeof val === 'object' ? moment(val).startOf('day').hours(12) : null;
    }

    isDateSelectable(val) {
        let date = this.parseDate(val);
        if (!date || !date.isValid) {
            return false;
        }

        return !(this.minDate && this.minDate.isValid() && date.isBefore(this.minDate)
            || this.maxDate && this.maxDate.isValid() && date.isAfter(this.maxDate)
            || this.isOffDay(val));
    }

    isOffDay(val) {
        let date = this.parseDate(val);

        if (this.offDays.length) {
            return this.offDays.filter(offDay => date.isSame(offDay)).length > 0;
        }

        return false;
    }

    @autobind
    handleMonthArrowClick(e) {
        if (e.currentTarget.attributes[ATTR_DISABLED].nodeValue === 'true') {
            return;
        }

        let direction = e.currentTarget.attributes[ATTR_DIRECTION].nodeValue;
        let step = direction === 'left' ? -1 : 1;
        let date = this.state.date;
        let newDate = date.clone().month(date.month() + step);

        if (this.props.onMonthChange) {
            this.props.onMonthChange(newDate);
        } else {
            this.setState({
                date: newDate
            });
        }
    }

    @autobind
    handleYearNumberClick() {
        this.setState({ isYearOpened: true });
    }

    @autobind
    handleYearArrowClick() {
        this.setState({ isYearOpened: !this.state.isYearOpened });
    }

    @autobind
    handleYearClick(year) {
        this.setState({
            date: this.state.date.clone().year(year),
            isYearOpened: !this.state.isYearOpened,
        });
    }

    @autobind
    handleYearClickOutside() {
        this.setState({
            isYearOpened: false,
        });
    }

    @autobind
    handleLayoutClick(e) {
        let day = e.target.attributes[ATTR_DAY];

        if (day) {
            let date = moment(day.nodeValue, this.props.dateFormat);
            if (this.isDateSelectable(date)) {
                if (this.props.onValueChange) {
                    this.props.onValueChange(date, date.format(this.props.dateFormat));
                }
            } else {
                if (this.props.onValueChange) {
                    this.props.onValueChange(null, null);
                }
            }
        }
    }
}
