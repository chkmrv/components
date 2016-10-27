import React from 'react';

import './demo-example.css';
const cn = require('bem-cn')('demo-example');

export default class DemoExample extends React.Component {
    static propTypes = {
        view: React.PropTypes.oneOf(['column', 'row']),
        header: React.PropTypes.node,
        footer: React.PropTypes.arrayOf(React.PropTypes.node),
    }

    static defaultProps = {
        view: 'column',
    }

    render() {
        const { view } = this.props;
        return (
            <div className={ cn({ view }).mix(this.props.className) }>
                { this.props.header &&
                    <div className={ cn('header') }>
                        { this.props.header }
                    </div>
                }
                <div className={ cn('content') }>
                    { this.props.children }
                </div>
                { this.props.footer &&
                    <div className={ cn('footer') } >
                        { this.props.footer.map((item, i) => <div key={ 'item' + i }>{ item }</div>) }
                    </div>
                }
            </div>
        );
    }
}
