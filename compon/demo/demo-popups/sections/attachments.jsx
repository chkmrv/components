import React from 'react';
import autobind from 'autobind-decorator';

import ClickTarget from './click-target';
import Popup from 'components/src/popup/popup';

export default class AttachmentsSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showPopup: false,
            position: 0,
        };
    }

    getAttachments() {
        switch(this.state.position) {
            case 0: return [ 'middle left', 'middle right' ];
            case 1: return [ 'top center', 'bottom center' ];
            case 2: return [ 'middle right', 'middle left' ];
            case 3: return [ 'bottom center', 'top center' ];
        }
    }

    render() {
        const attachment = this.getAttachments();

        return (
            <div>
                <Popup
                    popupAttachment={ attachment[0] }
                    targetAttachment={ attachment[1] }
                    popupVisible={ this.state.showPopup }
                    popupContent={
                        <div style={ {
                            width: '250px',
                            backgroundColor: '#fff',
                            boxShadow: '0px 0px 3px rgba(0, 0, 0, .7)'
                        } }>
                            { `Popup desired position is '${attachment[1]}'` }
                        </div>
                    }
                    onClickOutside={ () => {
                        this.setState({ showPopup: false });
                    } }
                >
                    <ClickTarget
                        style={ { margin: '0px auto' } }
                        onClick={ this.handleTargetClick }
                    >
                        { `Click me to ${this.state.showPopup ? 'rotate' : 'show'} popup!` }
                    </ClickTarget>
                </Popup>
            </div>
        );
    }

    @autobind
    handleTargetClick() {
        if (!this.state.showPopup) {
            this.setState({ showPopup: true });
        } else {
            let position = this.state.position;
            position = position + 1 <= 3
                ? position + 1
                : 0;

            this.setState({ position });
        }
    }
}
