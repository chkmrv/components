import React from 'react';
import i18next from 'i18next';
import autobind from 'autobind-decorator';

export const LOCALE_TYPES = {
    translate: React.PropTypes.func,
};

export default class LocaleProvider extends React.Component {
    static childContextTypes = LOCALE_TYPES

    static propTypes = {
        locale: React.PropTypes.string,
        bundle: React.PropTypes.object,
    }

    static defaultProps = {
        locale: 'ru-RU',
    }

    constructor(props, context) {
        super(props, context);

        this.initEngine(props);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.bundle !== this.props.bundle) {
            this.initEngine(nextProps);
        }
    }

    initEngine(props) {
        return i18next.init({
            resources: props.bundle,
            interpolation: {
                prefix: '${',
                suffix: '}',
            },
         });
    }

    getChildContext() {
        return {
            translate: this.translate,
        };
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }

    @autobind
    translate(key, options) {
        return i18next.t(key, Object.assign({},
            options,
            { lng: this.props.locale }
        ));
    }
}
