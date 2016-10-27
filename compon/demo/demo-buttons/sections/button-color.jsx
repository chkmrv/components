import React from 'react';

import Button from 'components/src/button/button';

const STYLE = { paddingTop: '10px' };

export default class ButtonColorSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Button color='orange'>
                        Orange button
                    </Button>
                </div>
                <div style={ STYLE }>
                    <Button color='green'>
                        Green button
                    </Button>
                </div>
                <div style={ STYLE }>
                    <Button color='white'>
                        White button
                    </Button>
                </div>
            </div>
        );
    }
}
