import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import Icon from '../icon/icon';
import Popup from '../popup/popup-core';
import ResizeSensor from '../resize-sensor/resize-sensor';

import './dropdown.css';
const cn = require('bem-cn')('dropdown');

export default class Dropdown extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            value: React.PropTypes.string,
            text: React.PropTypes.node,
        })),
        emptyOptionsText: React.PropTypes.node,
        placeholder: React.PropTypes.node,
        onChange: React.PropTypes.func,
    };

    static defaultProps = {
        value: null,
        options: [],
        disabled: false,
        emptyOptionsText: 'Нет вариантов',
        /* eslint-disable no-unused-vars */
        onChange: value => {},
        /* eslint-enable no-unused-vars */
    };

    constructor(props, context) {
        super(props, context);

        this.state = {
            isPopupVisible: false,
            popupWidth: 'auto',
            optionsAttachment: 'bottom',
        };
    }

    componentDidMount() {
        if (this.refs.popup) {
            this.refs.popup.setTarget(ReactDOM.findDOMNode(this.refs.button));
        }
    }

    componentDidUpdate() {
        if (this.refs.popup) {
            this.refs.popup.setTarget(ReactDOM.findDOMNode(this.refs.button));
        }
    }

    render() {
        const { disabled } = this.props;
        const attach = this.state.isPopupVisible ? this.state.optionsAttachment : '';

        return (
            <div { ...this.props } className={ cn({ disabled, attach }).mix(this.props.className)}>
                { this.renderButton() }
                { this.state.isPopupVisible && this.renderOptions() }
                <ResizeSensor onResize={ this.handleResize } />
            </div>
        );
    }

    renderButton() {
        const { options, value, placeholder } = this.props;
        const { isPopupVisible } = this.state;
        const foundOption = options.filter(option => value === option.value)[0];

        return (
            <div ref='button' className={ cn('button') } onClick={ this.handleButtonClick }>
                { !!foundOption && foundOption.text || value || placeholder || '' }
                <div className={ cn('arrow-box') }>
                    <Icon tool='arrow-down' className={ cn('arrow', { direction: isPopupVisible ? 'up' : 'down' }) } />
                </div>
            </div>
        );
    }

    renderOptions() {
        const attach = this.state.isPopupVisible ? this.state.optionsAttachment : '';

        return (
            <Popup
                ref='popup'
                style={ { width: `${this.state.popupWidth}px` } }
                popupAttachment='top center'
                targetAttachment='bottom center'
                popupContent={
                    <div className={ cn('options', { attach }) }>
                        { !!this.props.options && this.props.options.length > 0
                            ? this.props.options.map(this.renderOption)
                            : <div className={ cn('empty-options') }>{ this.props.emptyOptionsText }</div>
                        }
                    </div>
                }
                onClickOutside={ this.handleClickOutside }
                onAttachmentAutoChange={ this.handleAttachmentAutoChange }
            />
        );
    }

    @autobind
    renderOption(option) {
        return (
            <div
                key={ option.value }
                className={ cn('option') }
                data-value={ option.value }
                onClick={ this.handleOptionClick }
            >
                { option.text }
            </div>
        );
    }

    @autobind
    handleButtonClick() {
        if (!this.props.disabled) {
            this.setState({
                isPopupVisible: !this.state.isPopupVisible,
            });
        }
    }

    @autobind
    handleClickOutside() {
        if (!this.props.disabled) {
            this.setState({
                isPopupVisible: false,
            });
        }
    }

    @autobind
    handleAttachmentAutoChange(nextPopupAttachment) {
        this.setState({
            optionsAttachment: nextPopupAttachment === 'top center' ? 'bottom' : 'top',
        });
    }

    @autobind
    handleOptionClick(e) {
        if (!this.props.disabled) {
            const target = e.currentTarget || e.target;
            const value = target.getAttribute('data-value');

            this.setState({
                isPopupVisible: false,
            });

            this.props.onChange(value);
        }
    }

    @autobind
    handleResize() {
        const button = ReactDOM.findDOMNode(this.refs.button);
        if (!!button) {
            this.setState({
                popupWidth: button.offsetWidth
            });
        }
    }
}
