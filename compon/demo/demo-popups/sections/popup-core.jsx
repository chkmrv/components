import React from 'react';
import ReactDOM from 'react-dom';

import Popup from 'components/src/popup/popup-core';

import ClickTarget from './click-target';
import PopupContent from './popup-content';

export default class PopupCoreSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showPopup: false,
        };
    }

    componentDidMount() {
        if (this.refs.popup) {
            this.refs.popup.setTarget(ReactDOM.findDOMNode(this.refs.target));
        }
    }

    componentDidUpdate() {
        if (this.refs.popup) {
            this.refs.popup.setTarget(ReactDOM.findDOMNode(this.refs.target));
        }
    }

    render() {
        return (
            <div>
                <ClickTarget
                    ref='target'
                    style={ { margin: '0px auto' } }
                    onClick={ () => { this.setState({ showPopup: !this.state.showPopup }); } }
                >
                    { `Click me to ${this.state.showPopup ? 'hide' : 'show' } popup!` }
                </ClickTarget>
                { this.state.showPopup &&
                    <Popup
                        ref='popup'
                        popupAttachment='middle left'
                        targetAttachment='middle right'
                        popupContent={ <PopupContent>I am popup</PopupContent> }
                        onClickOutside={ () => { this.setState({ showPopup: false }); } }
                    />
                }
            </div>
        );
    }
}
