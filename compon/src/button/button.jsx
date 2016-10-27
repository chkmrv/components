import React from 'react';
import autobind from 'autobind-decorator';
import * as theme from '../theme';

require('./button.css');
const cn = theme.className('kit-button');

export default class Button extends React.Component {
    static propTypes = {
        size: React.PropTypes.oneOf([ 'm', 'l' ]),
        color: React.PropTypes.oneOf([ 'orange', 'green', 'white' ]),
        disabled: React.PropTypes.bool,
    };

    static defaultProps = {
        size: 'm',
        color: 'orange',
        disabled: false,
    };

    render() {
        let { size, color, disabled } = this.props;
        if (disabled) {
            color = null;
        }

        return (
            <button
                className={ cn({ size, color, disabled }).mix(this.props.className) }
                onClick={ this.handleClick }
            >
                <div className={ cn('text') }>
                    { this.props.children }
                </div>
            </button>
        );
    }

    @autobind
    handleClick(e) {
        if (!this.props.disabled && !!this.props.onClick) {
            this.props.onClick(e);
        }
    }
}
