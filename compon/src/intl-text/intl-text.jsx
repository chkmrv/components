import React from 'react';

import { LOCALE_TYPES } from './locale-provider';

const MATCH_RE = /__COMPONENT\d+__/;
const NAME_RE = /(__COMPONENT\d+__)/;

export default class IntlText extends React.Component {
    static contextTypes = LOCALE_TYPES

    static propTypes = {
        /**
         * A key to extract portion of data from localization bundle
         */
        code: React.PropTypes.string,

        /**
         * Options for extracting data from localization bundle
         */
        params: React.PropTypes.any,

        /**
         * Set to true if code resolves to raw html markup
         */
        renderAsInnerHtml: React.PropTypes.bool,
    }

    static defaultProps = {
        renderAsInnerHtml: false,
    }

    render() {
        const { code, ...props } = this.props;
        const { translate } = this.context;

        let result;
        if (!!this.props.params && Object.keys(this.props.params).length > 0) {
            const { simple, components } = this.parseParams();
            result = !!code ? translate(code, simple) : '';
            if (!this.props.renderAsInnerHtml && Object.keys(components).length > 0) {
                result = this.formatParams(result, components).map(this.renderPart);
            }
        } else {
            result = !!code ? translate(code) : '';
        }

        return this.props.renderAsInnerHtml
            ? <span { ...props } dangerouslySetInnerHTML={ { __html: result } } />
            : <span { ...props }>{ result }</span>;
    }

    renderPart(part, i) {
        return <span key={ `part-${i}` }>{ part }</span>;
    }

    parseParams() {
        return Object.keys(this.props.params).reduce((result, code, i) => {
            const param = this.props.params[code];
            if (typeof param.props !== 'undefined' ) {
                // react components
                const temp = `__COMPONENT${i}__`;
                result.components[temp] = param;
                result.simple[code] = temp;
            } else {
                // simple params
                result.simple[code] = param;
            }
            return result;
        }, { simple: {}, components: [] });
    }

    formatParams(pattern, params) {
        let result = [];
        let matchResult = pattern.match(MATCH_RE);
        while (matchResult) {
            const found = matchResult[0];
            const name = found.replace(NAME_RE, '$1');
            result.push(pattern.slice(0, matchResult.index));
            result.push(params[name]);
            pattern = pattern.slice(matchResult.index + matchResult[0].length);
            matchResult = pattern.match(MATCH_RE);
        }

        if (!!pattern) {
            result.push(pattern);
        }

        return result;
    }
}
