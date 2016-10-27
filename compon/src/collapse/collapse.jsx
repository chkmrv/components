import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import './collapse.css';
const cn = require('bem-cn')('kit-collapse');

export default class Collapse extends React.Component {
    static propTypes = {
        toggleText: React.PropTypes.node,
        isExpanded: React.PropTypes.bool,

        onToggleClick: React.PropTypes.func,
    }

    static defaultProps = {
        isExpanded: false
    };

    componentDidMount() {
        this.updateContentHeight();
    }

    componentDidUpdate() {
        this.updateContentHeight();
    }

    render() {
        return (
            <div className={ cn({ expanded: this.props.isExpanded }).mix(this.props.className) }>
                <div className={ cn('toggle') } onClick={ this.handleToggleClick }>
                    { this.props.toggleText }
                    <div className={ cn('arrow', { direction: this.props.isExpanded ? 'up' : 'down' }) } />
                </div>
                <div ref='contentLayout' className={ cn('content-layout') }>
                    <div ref='content' className={ cn('content') }>
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }

    updateContentHeight() {
        const content = ReactDOM.findDOMNode(this.refs.content);
        const contentLayout = ReactDOM.findDOMNode(this.refs.contentLayout);
        const maxHeight = this.props.isExpanded ? content.offsetHeight : 0;

        contentLayout.style.maxHeight = `${maxHeight}px`;
    }

    @autobind
    handleToggleClick(e) {
        if (this.props.onToggleClick) {
            this.props.onToggleClick(e);
        }
    }
}
