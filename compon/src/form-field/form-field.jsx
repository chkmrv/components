import React from 'react';

import './form-field.css';
const cn = require('bem-cn')('form-field');

export default class FormField extends React.Component {
    static propTypes = {
        labelText: React.PropTypes.node,
        orientation: React.PropTypes.oneOf(['horizontal', 'vertical']),
    }

    static defaultProps = {
        orientation: 'vertical',
    };

    render() {
        const { orientation, ...props } = this.props;

        return (
            <div { ...props } className={ cn({ orientation }).mix(this.props.className) }>
                <div className={ cn('label') }>{ this.props.labelText }</div>
                <div className={ cn('control') }>{ this.props.children }</div>
            </div>
        );
    }
}
