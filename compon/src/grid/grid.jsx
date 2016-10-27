import React from 'react';
import './grid.scss';
import './grid_ie9_.scss';

const cn = require('bem-cn')('kit-grid');

export default class Grid extends React.Component {
    static propTypes = {
        fluid: React.PropTypes.bool,
        fixed: React.PropTypes.bool,
        tag: React.PropTypes.string,
    };
    
    static defaultProps = {
      tag: 'div',
    };
    
    render() {
        const Tag = this.props.tag;
        
        const classes = cn({
            fluid: this.props.fluid,
            fixed: this.props.fixed,
        }).mix(this.props.className);
        
        return (
            <Tag className={ classes } { ...this.props }>
                { this.props.children }
            </Tag>
        );
    }
}