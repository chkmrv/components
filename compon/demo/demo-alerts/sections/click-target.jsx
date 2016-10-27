import React from 'react';
import * as theme from 'components/src/theme';

import './click-target.css';
const cn = theme.className('click-target');

export default class ClickTarget extends React.Component {
    render() {
        return (
            <div { ...this.props } className={ cn } />
        );
    }
}
