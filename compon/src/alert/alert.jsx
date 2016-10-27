import React from 'react';

import Popup from '../popup/popup-core';

import './alert.css';
const cn = require('bem-cn')('kit-alert');

export default class Alert extends React.Component {
    static propTypes = {
        attachment: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    }

    static defaultProps = {
        attachment: 'right'
    };

    render() {
        const { popupAttachment, targetAttachment, popupOffset } = this.getPopupOptions();

        return (
            <Popup
                ref='popup'
                popupOffset={ popupOffset }
                popupAttachment={ popupAttachment }
                targetAttachment={ targetAttachment }
                popupContent={ this.renderPopupContent() }
            />
        );
    }

    renderPopupContent() {
        const { attachment } = this.props;

        return (
            <div className={ cn({ attachment }).mix(this.props.className) }>
                { this.props.children }
            </div>
        );
    }

    getPopupOptions() {
        switch (this.props.attachment) {
            case 'top':
                return {
                    popupAttachment: 'bottom middle',
                    targetAttachment: 'top middle',
                    popupOffset: '8px 0px',
                };
            case 'bottom':
                return {
                    popupAttachment: 'top middle',
                    targetAttachment: 'bottom middle',
                    popupOffset: '-8px 0px',
                };
            case 'left':
                return {
                    popupAttachment: 'middle right',
                    targetAttachment: 'middle left',
                    popupOffset: '0px 8px',
                };
            default:
                return {
                    popupAttachment: 'middle left',
                    targetAttachment: 'middle right',
                    popupOffset: '0px -8px',
                };
        }
    }

    setTarget(target) {
        this.refs.popup.setTarget(target);
    }
}
