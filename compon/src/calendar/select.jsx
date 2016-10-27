import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import './select.css';

const cn = require('bem-cn')('select');

export default class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: ~this.props.options.indexOf(this.props.initial) ? this.props.initial : this.props.options[0],
        };
    }

    static propTypes = {
        onShow: React.PropTypes.func,
        onHide: React.PropTypes.func,
        onSelect: React.PropTypes.func,
        initial: React.PropTypes.string,
        options: React.PropTypes.arrayOf(React.PropTypes.string),
    };

    static defaultProps = {
        onShow: () => null,
        onHide: () => null,
        onSelect: () => null,
    }

    componentDidMount() {
        document.addEventListener('click', this.onWindowClick);

        var { list, selectedOption } = this.refs;

        setTimeout(() => {
            list.scrollTop = selectedOption.offsetTop + list.scrollTop - 20;
        }, 10); // fixme

        this.props.onSelect(this.state.value);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onWindowClick);
    }

    render() {
        return (
            <div className={ cn({ open: this.state.open }) } ref='select'>
                <header onClick={ this.onHandleTitleClick }>
                    <strong>{ this.state.value }</strong>
                </header>
                <div
                    ref='list'
                    onWheel={ this.handleWheel }
                >
                    { this.props.options.map((el, i) => (
                        <span
                            value={ el }
                            onClick={ this.onHandleOptionClick.bind(null, el) }
                            key={ i }
                            className={ this.state.value === el ? 'selected' : null }
                            ref={ this.state.value === el ? 'selectedOption' : null }
                        >
                            { el }
                        </span>
                    )) }
                </div>
            </div>
        );
    }

    @autobind
    onHandleTitleClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    @autobind
    onHandleOptionClick(value) {
        this.setState({
            open: false,
            value: value,
        });

        this.props.onSelect(value);
    }

    @autobind
    onHandleOutsideClick() {
        this.setState({
            open: false,
        });
    }

    @autobind
    handleWheel(e) {
        const target = this.refs.list;

        if (e.deltaY > 0 && target.scrollHeight <= target.offsetHeight + target.scrollTop
            || e.deltaY < 0 && target.scrollTop === 0
        ) {
            e.preventDefault();
        }
    }

    @autobind
    onWindowClick(e) {
        const { clientX, clientY } = e;
        const { top, left, bottom, right } = ReactDOM.findDOMNode(this).getBoundingClientRect();

        if (clientX < left || clientX > right || clientY < top || clientY > bottom) {
            this.onHandleOutsideClick();
        }
    }
}
