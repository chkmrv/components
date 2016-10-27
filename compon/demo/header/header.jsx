import React from 'react';
import * as theme from '../../src/theme';

const cn = theme.className('header');

export class Header extends React.Component {
    static propTypes = {
        fixed: React.PropTypes.string
    }

    render() {
        return (
            <div className={ cn({ fixed: this.props.fixed }) }>
                Sberbank iShop widgets
            </div>
        );
    }
}
