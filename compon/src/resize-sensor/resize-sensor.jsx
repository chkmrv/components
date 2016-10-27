import React from 'react';
import assign from '../lib/assign';

export default class ResizeSensor extends React.Component {
    static propTypes = {
        onResize: React.PropTypes.func.isRequired,
    }

    shouldComponentUpdate() {
        // prevents all updates because we manipulate the DOM
        return false;
    }

    componentDidMount() {
        this.attachResizeEvent();
    }

    render() {
        let style = {
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            overflow: 'scroll',
            zIndex: -1,
            visibility: 'hidden'
        };

        let stylesChild = {
            position: 'absolute',
            left: 0,
            top: 0,
            visibility: 'hidden'
        };

        return (
            <div className='resize-sensor' style={ style }>
                <div ref='expand' className='resize-sensor-expand' style={ style }>
                    <div ref='expandChild' style={ stylesChild }/>
                </div>
                <div ref='shrink' className='resize-sensor-shrink' style= { style }>
                    <div
                        ref='shrinkChild'
                        style={ assign(stylesChild, { width: '200%', height: '200%' }) }
                    />
                </div>
            </div>
        );
    }

    attachResizeEvent() {
        var { expand, expandChild, shrink, } = this.refs;

        var reset = function() {
            expandChild.style.width = expand.offsetWidth + 10 + 'px';
            expandChild.style.height = expand.offsetHeight + 10 + 'px';
            expand.scrollLeft = expand.scrollWidth;
            expand.scrollTop = expand.scrollHeight;
            shrink.scrollLeft = shrink.scrollWidth;
            shrink.scrollTop = shrink.scrollHeight;
        };

        reset();

        addEvent(expand, 'scroll', () => {
            this.props.onResize();
            reset();
        });

        addEvent(shrink, 'scroll', () => {
            this.props.onResize();
            reset();
        });
    }
}

function addEvent(el, name, cb) {
    if (el.attachEvent) {
        el.attachEvent('on' + name, cb);
    } else {
        el.addEventListener(name, cb);
    }
}
