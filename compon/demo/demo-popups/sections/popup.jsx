import React from 'react';

import Popup from 'components/src/popup/popup';

import ClickTarget from './click-target';
import PopupContent from './popup-content';

export default class PopupSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showPopup: false,
        };
    }

    render() {
        return (
            <div>
                <Popup
                    popupAttachment='middle left'
                    targetAttachment='middle right'
                    popupContent={ <PopupContent>I am popup</PopupContent> }
                    popupVisible={ this.state.showPopup }
                    onClickOutside={ () => { this.setState({ showPopup: false }); } }
                >
                    <ClickTarget
                        style={ { margin: '0px auto' } }
                        onClick={ () => { this.setState({ showPopup: !this.state.showPopup }); } }
                    >
                        { `Click me to ${this.state.showPopup ? 'hide' : 'show' } popup!` }
                    </ClickTarget>
                </Popup>
            </div>
        );
    }
}
