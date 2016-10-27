import React from 'react';
import autobind from 'autobind-decorator';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

import Frame from 'react-frame-component';
import FrameContent from './frame-content';
import Link from 'components/src/link/link';
import Highlight from 'components/src/highlight/highlight';

require('!style!css!postcss!prismjs/themes/prism.css');
require('!style!css!postcss!prismjs/themes/prism-coy.css');

require('./demo-section.css');
const cn = require('bem-cn')('demo-section');

const SPACE_REPLACE_RE = / /g;

const PRISM_HIGHLIGHTER = {
    highlight: text => Prism.highlight(text, Prism.languages.jsx)
};

const STYLE_FIX = 'body { background: #fff; }';

export default class DemoSection extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        snippet: React.PropTypes.string,
        medias: React.PropTypes.arrayOf(React.PropTypes.string),
        sizes: React.PropTypes.arrayOf(React.PropTypes.string),
        useFrame: React.PropTypes.bool,
    }

    static defaultProps = {
        medias: [ '320', '768', '1025' ],
        sizes: [],
        useFrame: true,
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            hidden: true,
            media: '1025',
            frameHeight: '0',
            size: 'l',
            styleLinks: [],
        };

        if (typeof MutationObserver !== 'undefined') {
            this.observer = new MutationObserver(() => {
                this.updateLinks();
            });

            Array.from(document.getElementsByTagName('link')).forEach(link => {
                this.observer.observe(link, { attributes: true, attributeOldValue: true, attributeFilter: [ 'href' ] });
            });
        }
    }

    componentDidMount() {
        this.updateLinks();
    }

    componentWillUnmount() {
        if (!!this.observer) {
            this.observer.disconnect();
        }
    }

    updateLinks() {
        let links = Array.from(document.getElementsByTagName('link'));
        if (links.length > 0) {
            this.setState({
                styleLinks: links.map(link => link.href),
            });
        }
    }

    prepareLink(str) {
        return !str ? '' : `#${str.replace(SPACE_REPLACE_RE, '-')}`;
    }

    render() {
        return (
            <div className={ cn }>
                { this.renderTitle() }
                <div className={ cn('description') }>
                    { this.props.description }
                </div>
                <div className={ cn('content') }>
                    { this.renderExample() }
                    { this.renderSnippet() }
                </div>
            </div>
        );
    }

    renderTitle() {
        return (
            <div className={ cn('title') }>
                <div className={ cn('title-text') }>{ this.props.title }</div>
                <div className={ cn('title-anchor') }>
                    <Link
                        href={ this.prepareLink(this.props.title) }
                        text='link'
                        pseudo={ true }
                        color='white'
                    />
                </div>
                <div className={ cn('medias') }>
                    { this.props.useFrame && !!this.observer && this.props.medias.map(media => (
                        <div key={ `media-${media}` } className={ cn('media') }>
                            <Link
                                className={ cn('media-text') }
                                pseudo={ true }
                                onClick={ () => this.setState({ media }) }
                                text={ this.state.media === media ? '' : `${media}px` }
                                color='white'
                            >
                                { this.state.media === media ? `${media}px` : '' }
                            </Link>
                        </div>
                    )) }
                </div>
            </div>
        );
    }

    renderExample() {
        return (
            <div className={ cn('example') }>
                <div className={ cn('toggle-link') }>
                    <Link
                        pseudo={ true }
                        text={ this.state.hidden ? 'Show source' : 'Hide source' }
                        onClick={ this.handleToggleLinkClick }
                    />
                </div>
                { this.props.useFrame && !!this.observer ? this.renderFrame() : this.props.children }
            </div>
        );
    }

    renderFrame() {
        return (
            <Frame
                width={ this.state.media }
                height={ this.state.frameHeight }
                frameBorder='0'
            >
                { this.state.styleLinks.map(style => (
                    <link key={ style } rel='stylesheet' href={ style } />
                )) }
                <style type='text/css'>
                    { STYLE_FIX }
                </style>
                <FrameContent
                    className={ cn('frame-body') }
                    onResize={ this.handleResize }
                >
                    { typeof this.props.children === 'function'
                        ? this.props.children(this.state.media)
                        : this.props.children
                    }
                </FrameContent>
            </Frame>
        );
    }

    renderSnippet() {
        return (
            <div className={ cn('snippet')({ hidden: this.state.hidden }) }>
                <Highlight
                    highlighter={ PRISM_HIGHLIGHTER }
                    text={ this.props.snippet }
                />
            </div>
        );
    }

    @autobind
    handleResize(height) {
        this.setState({
            frameHeight: height + 5
        });
    }

    @autobind
    handleToggleLinkClick(e) {
        e.preventDefault();

        this.setState({
            hidden: !this.state.hidden
        });
    }
}
