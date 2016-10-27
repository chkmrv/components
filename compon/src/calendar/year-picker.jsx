import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import autobind from 'autobind-decorator';
import rangeRight from 'lodash/rangeRight';
import ScrollArea from 'react-scrollbar/dist/no-css';

import './scroll-area.css';
import './year-picker.css';
const cn = require('bem-cn')('year-picker');

export default class YearPicker extends React.Component {
    static propTypes = {
        minYear: React.PropTypes.number,
        maxYear: React.PropTypes.number,
        onYearClick: React.PropTypes.func,
        onClickOutside: React.PropTypes.func,
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.onWindowMouseDown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onWindowMouseDown);
    }

    render() {
        let { minYear, maxYear } = this.props;

        if (!maxYear) {
            maxYear = moment().year();
        }

        if (!minYear) {
            minYear = maxYear - 100;
        }

        return (
            <div className={ cn.mix(this.props.className) }>
                { this.props.children }
                <ScrollArea
                    speed={ 0.8 }
                    className={ cn('scroll-area').toString() }
                    horizontal={ false }
                    minScrollSize={ 40 }
                >
                    <ul
                        ref='list'
                        className={ cn('list') }
                        onWheel={ this.handleWheel }
                    >
                        { rangeRight(minYear, maxYear + 1).map(this.renderYear) }
                    </ul>
                </ScrollArea>
            </div>
        );
    }

    @autobind
    renderYear(year) {
        return (
            <li
                key={ `year-${year}` }
                className={ cn('year') }
                onClick={ () => { this.handleYearClick(year); } }
            >
                { year }
            </li>
        );
    }

    @autobind
    handleWheel(e) {
        const target = ReactDOM.findDOMNode(this.refs.list);

        if (e.deltaY > 0 && target.scrollHeight === target.offsetHeight + target.scrollTop
            || e.deltaY < 0 && target.scrollTop === 0
        ) {
            e.preventDefault();
        }
    }

    handleYearClick(year) {
        if (this.props.onYearClick) {
            this.props.onYearClick(year);
        }
    }

    @autobind
    onWindowMouseDown(e) {
        const { clientX, clientY } = e;
        const { top, left, bottom, right } = ReactDOM.findDOMNode(this).getBoundingClientRect();

        if (clientX < left || clientX > right || clientY < top || clientY > bottom && this.props.onClickOutside) {
            this.props.onClickOutside();
        }
    }
}
