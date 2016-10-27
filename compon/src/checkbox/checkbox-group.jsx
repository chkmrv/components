import React from 'react';
import autobind from 'autobind-decorator';

import Checkbox from './checkbox';

import './checkbox-group.css';
const cn = require('bem-cn')('kit-checkbox-group');

export default class CheckboxGroup extends React.Component {
    static propTypes = {
        size: Checkbox.propTypes.size,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            checked: React.PropTypes.bool,
            value: React.PropTypes.any,
            text: React.PropTypes.node,
            props: React.PropTypes.object,
        })),
        orientation: React.PropTypes.oneOf([ 'vertical', 'horizontal' ]),
    }

    static defaultProps = {
        size: Checkbox.defaultProps.size,
        options: [],
        orientation: 'vertical',
    }

    render() {
        const { size, orientation, ...props } = this.props;

        return (
            <div { ...props } className={ cn({ orientation }).mix(this.props.className) }>
                { this.props.options.map(option => (
                    <Checkbox
                        { ...option.props }
                        size={ size }
                        key={ `checkbox-${option.value}` }
                        className={ cn('checkbox') }
                        checked={ option.checked }
                        onClick={ () => { this.handleCheckboxClick(option.value); } }
                    >
                        { option.text }
                    </Checkbox>
                )) }
                { !!this.props.children &&
                    React.Children.map(this.props.children, this.cloneChild)
                }
            </div>
        );
    }

    @autobind
    cloneChild(child) {
        return React.cloneElement(child, {
            className: cn('checkbox'),
            size: this.props.size
        });
    }

    @autobind
    handleCheckboxClick(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}
