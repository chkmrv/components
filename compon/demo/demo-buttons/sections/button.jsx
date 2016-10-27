import React from 'react';

import Button from 'components/src/button/button';

const STYLE = { paddingTop: '10px' };

export default class ButtonSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Button>
                        Default button
                    </Button>
                </div>
                <div style={ STYLE }>
                    <Button disabled={ true }>
                        Disabled button
                    </Button>
                </div>
            </div>
        );
    }
}
