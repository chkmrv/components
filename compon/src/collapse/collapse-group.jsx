import React from 'react';
import autobind from 'autobind-decorator';

import './collapse-group.css';
const cn = require('bem-cn')('kit-collapse-group');

export default class CollapseGroup extends React.Component {
    static propTypes = {
        isAccordion: React.PropTypes.bool,
    }

    static defaultProps = {
        isAccordion: false,
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            expandedChild: null,
        };
    }

    render() {
        return (
            <div className={ cn }>
                { !!this.props.children &&
                    React.Children.map(this.props.children, this.cloneChild)
                }
            </div>
        );
    }

    @autobind
    cloneChild(child, i) {
        return React.cloneElement(child, Object.assign(
            { className: cn('collapse') },
            this.props.isAccordion && {
                onToggleClick: () => { this.handleToggleClick(i); },
            },
            this.props.isAccordion && {
                isExpanded: this.state.expandedChild === i
            }
        ));
    }

    handleToggleClick(i) {
        this.setState({
            expandedChild: i === this.state.expandedChild ? null : i
        });
    }
}
