import React from 'react';
import autobind from 'autobind-decorator';

import './link.css';
const cn = require('bem-cn')('kit-link');

export default class Link extends React.Component {
    static propTypes = {
        pseudo: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        text: React.PropTypes.node,
        href: React.PropTypes.string,
        color: React.PropTypes.oneOf([ 'white', 'black' ]),
        onClick: React.PropTypes.func,
    }

    static defaultProps = {
        pseudo: false,
        disabled: false,
        color: 'black',
        onClick: () => {},
    };

    render() {
        let { pseudo, color, disabled, ...props } = this.props;

        return (
            <a
                { ...props }
                className={ cn({ pseudo, color, disabled }).mix(this.props.className) }
                href={ this.props.href }
                onClick={ this.handleClick }
            >
                { this.props.children }
                { !!this.props.text &&
                    <span className={ cn('text') }>{ this.props.text }</span>
                }
            </a>
        );
    }

    @autobind
    handleClick(e) {
        if (!this.props.disabled) {
            this.props.onClick(e);
        }
    }
}
