import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createHistory } from 'history';

import { Demo } from './demo';

const history = createHistory();

let contextRoot;
let route;
history.listen(location => {
    contextRoot = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
    route = location.pathname.substring(location.pathname.lastIndexOf('/'));
});

let appElement = document.createElement('div');
appElement.setAttribute('id', 'app');
document.body.appendChild(appElement);

ReactDOM.render(
    <Demo
        route={ route }
        onSidebarItemClick={ route => {
            history.push({
                pathname: `${contextRoot}${route}`
            });
        } }
    />,
    appElement
);
