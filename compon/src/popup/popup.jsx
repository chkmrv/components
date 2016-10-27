import React from 'react';
import ReactDOM from 'react-dom';

import PopupCore from './popup-core';

export default class Popup extends PopupCore {
    static propTypes = {
        popupVisible: React.PropTypes.bool
    }

    static defaultProps = {
        popupVisible: false
    }

    componentDidMount() {
        if (this.props.popupVisible) {
            this.renderInBody.attach();
            super.setTarget(ReactDOM.findDOMNode(this.refs.target));
        }

        super.setHidePartner(ReactDOM.findDOMNode(this.refs.target));

        this.ensureClickEvent();
    }

    componentDidUpdate(prevProps) {
        if (this.props.popupVisible) {
            super.getRenderInBody().attach();
            super.setTarget(ReactDOM.findDOMNode(this.refs.target));
        } else {
            super.getRenderInBody().detach();
        }

        super.componentDidUpdate(prevProps);
    }

    render() {
        return React.cloneElement(this.props.children, { ref: 'target' });
    }

    getTarget() {
        return this.refs.target;
    }
}
