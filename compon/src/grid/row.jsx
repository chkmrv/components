import React from 'react';

const JUSTIFIES = ['start', 'center', 'end', 'around', 'between', 'unset'];
const ALIGNS = ['top', 'middle', 'bottom', 'unset'];
const DIRECTIONS = ['reverse', 'unset'];
const cn = require('bem-cn')('kit-row');

export default class Row extends React.Component {
    static propTypes = {
        tag: React.PropTypes.string,

        xsDirection: React.PropTypes.oneOf(DIRECTIONS),
        mdDirection: React.PropTypes.oneOf(DIRECTIONS),
        lgDirection: React.PropTypes.oneOf(DIRECTIONS),
        
        xsJustify: React.PropTypes.oneOf(JUSTIFIES),
        mdJustify: React.PropTypes.oneOf(JUSTIFIES),
        lgJustify: React.PropTypes.oneOf(JUSTIFIES),

        xsAlign: React.PropTypes.oneOf(ALIGNS),
        mdAlign: React.PropTypes.oneOf(ALIGNS),
        lgAlign: React.PropTypes.oneOf(ALIGNS),
    };
    
    static defaultProps = {
      tag: 'div',
    };
    
    render() {
        const Tag = this.props.tag;
        
        const classes = cn({
            'xs-direction': this.props.xsDirection,
            'md-direction': this.props.mdDirection,
            'lg-direction': this.props.lgDirection,
            
            'xs-justify': this.props.xsJustify,
            'md-justify': this.props.mdJustify,
            'lg-justify': this.props.lgJustify,
            
            'xs-align': this.props.xsAlign,
            'md-align': this.props.mdAlign,
            'lg-align': this.props.lgAlign,
        }).mix(this.props.className);

        return (
            <Tag className={ classes } { ...this.props }>
                { this.props.children }
            </Tag>
        );
    }
}