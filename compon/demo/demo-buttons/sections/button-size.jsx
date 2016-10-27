import React from 'react';

import Button from 'components/src/button/button';

const STYLE = { paddingTop: '10px' };

export default class ButtonSizeSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Button size='m'>
                        Medium button
                    </Button>
                </div>
                <div style={ STYLE }>
                    <Button size='l'>
                        Large button
                    </Button>
                </div>
            </div>
        );
    }
}
