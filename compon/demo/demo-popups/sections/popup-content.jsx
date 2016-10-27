import React from 'react';

import './popup-content.css';
const cn = require('bem-cn')('popup-content');

export default class PopupContent extends React.Component {
    render() {
        return (
            <div className={ cn }>
                { this.props.children }
            </div>
        );
    }
}
