import React from 'react';
import * as theme from '../../src/theme';

require('./footer.css');
const cn = theme.className('footer');

const version = require('../../package.json').version;

export default class Footer extends React.Component {
    render() {
        return (
            <div className={ cn }>
                <div className={ cn('version') }>
                    { `components v${version}` }
                </div>
            </div>
        );
    }
}
