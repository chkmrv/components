import React from 'react';
import Search from 'components/src/search/search';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class SearchErrorSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 'Clear value to hide error'
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Search
                        value={ this.state.value }
                        error={ !!this.state.value ? 'Some error happened' : null }
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
