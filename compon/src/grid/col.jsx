import React from 'react';

const ORDERS = ['first', 'last', 'unset'];
const ALIGNS = ['top', 'middle', 'bottom', 'unset'];
const cn = require('bem-cn')('kit-col');

export default class Col extends React.Component {
    static propTypes = {
        tag: React.PropTypes.string,

        xs: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.bool,
        ]).isRequired,

        md: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.bool,
        ]),

        lg: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.bool,
        ]),

        xsOffset: React.PropTypes.number,
        mdOffset: React.PropTypes.number,
        lgOffset: React.PropTypes.number,

        xsOrder: React.PropTypes.oneOf(ORDERS),
        mdOrder: React.PropTypes.oneOf(ORDERS),
        lgOrder: React.PropTypes.oneOf(ORDERS),

        lgPush: React.PropTypes.number,
        lgPull: React.PropTypes.number,

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
            xs: this.props.xs,
            md: this.props.md,
            lg: this.props.lg,

            'xs-offset': this.props.xsOffset,
            'md-offset': this.props.mdOffset,
            'lg-offset': this.props.lgOffset,

            'lg-push': this.props.lgPush,
            'lg-pull': this.props.lgPull,

            'xs-order': this.props.xsOrder,
            'md-order': this.props.mdOrder,
            'lg-order': this.props.lgOrder,

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