import React from 'react';

import './tab.css';
const cn = require('bem-cn')('kit-tab');

export default class Tab extends React.Component {
    static propTypes = {
        text: React.PropTypes.string,
        selected: React.PropTypes.bool,
        color: React.PropTypes.oneOf([ 'white', 'black' ]),
        size: React.PropTypes.oneOf(['medium', 'large']),
    }

    static defaultProps = {
        color: 'black',
        size: 'large'
    };

    render() {
        const { selected, color, size, ...props } = this.props;

        return (
            <div
                { ...props}
                className={ cn({ selected, color, size }).mix(this.props.className) }
            >
                { this.props.children }
                { !!this.props.text &&
                    <span className={ cn('text') }>{ this.props.text }</span>
                }
            </div>
        );
    }
}
