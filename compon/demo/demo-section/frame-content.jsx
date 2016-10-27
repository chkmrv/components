import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';

import ResizeSensor from 'components/src/resize-sensor/resize-sensor';

export default class FrameContent extends React.Component {
    static propTypes = {
        onResize: React.PropTypes.func.isRequired,
    }

    render() {
        return (
            <div { ...this.props }>
                <ResizeSensor onResize={ this.handleResize } />
                { this.props.children }
            </div>
        );
    }

    @autobind
    handleResize() {
        this.props.onResize(ReactDOM.findDOMNode(this).offsetHeight);
    }
}
