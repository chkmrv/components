import React from 'react';
import * as theme from '../theme';
import './icon.css';
import './icon_tool.css';

const cn = theme.className('kit-icon');

export default class Icon extends React.Component {
    static propTypes = {
        tool: React.PropTypes.string
    }

    render() {
        const { tool } = this.props;

        return (
            <i
                { ...this.props }
                className={ cn({ tool }).mix(this.props.className) }
            />
        );
    }
}
