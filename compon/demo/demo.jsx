import React from 'react';
import autobind from 'autobind-decorator';
import callback from 'react-callback-props-decorator';
import * as theme from 'components/src/theme';

import Link from 'components/src/link/link';

import Footer from './footer/footer';

require('./demo.css');
require('components/src/fonts/fonts__sero-pro.css');
const cn = theme.className('demo');

const SPACE_REPLACE_RE = / /g;

const ITEMS = [
    { name: 'Palette', filename: 'demo-palette' },
    { name: 'Grid', filename: 'demo-grid' },
    { name: 'Localization', filename: 'demo-localization' },
    { name: 'Buttons', filename: 'demo-buttons' },
    { name: 'Inputs', filename: 'demo-inputs' },
    { name: 'Form Fields', filename: 'demo-form-fields' },
    { name: 'Searchs', filename: 'demo-searchs' },
    { name: 'Radios', filename: 'demo-radios' },
    { name: 'Checkboxes', filename: 'demo-checkboxes' },
    { name: 'Tabs', filename: 'demo-tabs' },
    { name: 'Popups', filename: 'demo-popups' },
    { name: 'Dropdowns', filename: 'demo-dropdowns' },
    { name: 'Collapses', filename: 'demo-collapses' },
    { name: 'Calendars', filename: 'demo-calendars' },
    { name: 'Date Pickers', filename: 'demo-date-pickers' },
    { name: 'Alerts', filename: 'demo-alerts' },
    { name: 'Carousel', filename: 'demo-carousel' },
];

export class Demo extends React.Component {
    static propTypes = {
        route: React.PropTypes.string
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            route: props.route
        };
    }

    renderContent() {
        let item = ITEMS.filter(item => this.getRoute(item.name) === this.state.route)[0];

        let component;
        if (!item) {
            component = this.renderMessage('Выберите компонент из списка слева');
        } else {
            try {
                let ComponentClass = require(`./${item.filename}/${item.filename}`).default;
                component = <ComponentClass />;
            } catch (_ex) {
                component = this.renderMessage('Не изобретено');
            }
        }

        return (
            <div className={ cn('content') }>
                { component }
            </div>
        );
    }

    renderMessage(message) {
        return (
            <div className={ cn('message') }>
                { message }
            </div>
        );
    }

    render() {
        return (
            <div className={ cn }>
                <div className={ cn('header') }>
                </div>
                <div className={ cn('layout') }>
                    { this.renderSidebar() }
                    { this.renderContent() }
                </div>
                <div className={ cn('footer') }>
                    <Footer />
                </div>
            </div>
        );
    }

    renderSidebar() {
        return (
            <ul className={ cn('sidebar') }>
                { ITEMS.map(this.renderSidebarItem) }
            </ul>
        );
    }

    @autobind
    renderSidebarItem(item) {
        let route = this.getRoute(item.name);
        let isSelected = route === this.state.route;

        return (
            <li
                key={ route }
                className={ cn('sidebar-item', { selected: isSelected }) }
                onClick= { () => this.onSidebarItemClick(route) }
            >
                <Link
                    className={ cn('sidebar-item-text') }
                    pseudo={ true }
                    text={ isSelected ? '' : item.name }
                    color='white'
                >
                    { isSelected ? item.name : '' }
                </Link>
            </li>
        );
    }

    getRoute(name) {
        return '/' + name.toLowerCase().replace(SPACE_REPLACE_RE, '-');
    }

    @callback
    onSidebarItemClick(route) {
        this.setState({
            route
        });
    }
}
