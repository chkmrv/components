import React from 'react';
import autobind from 'autobind-decorator';

import Tab from './tab';

import './tab-group.css';
const cn = require('bem-cn')('kit-tab-group');

export default class TabGroup extends React.Component {
    static propTypes = {
        value: React.PropTypes.any,
        size: Tab.propTypes.size,
        options: React.PropTypes.arrayOf(React.PropTypes.shape({
            value: React.PropTypes.any,
            text: React.PropTypes.node,
            props: React.PropTypes.object,
        })),
        onChange: React.PropTypes.func,
    }

    static defaultProps = {
        options: [],
        size: Tab.defaultProps.size,
    }

    render() {
        const { value, ...props } = this.props;

        return (
            <div { ...props } className={ cn.mix(this.props.className) }>
                { this.props.options.map(option => (
                    <Tab
                        { ...option.props }
                        key={ `tab-${option.value}` }
                        className={ cn('tab').mix(!!option.props ? option.props.className : '') }
                        size={ this.props.size }
                        text={ option.text }
                        selected={ value === option.value }
                        onClick={ () => { this.handleTabClick(option.value); } }
                    />
                )) }
                { !!this.props.children &&
                    React.Children.map(this.props.children, this.cloneChild)
                }
            </div>
        );
    }

    cloneChild(child) {
        return React.cloneElement(child, { className: cn('tab').mix(child.props.className)});
    }

    @autobind
    handleTabClick(value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
}
