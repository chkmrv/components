import React from 'react';
import Search from 'components/src/search/search';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class SearchPlaceholderSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Search
                        value={ this.state.value }
                        placeholder='With placeholder'
                        onChange={ value => {
                            this.setState({ value });
                        } }
                    />
                </div>
            </div>
        );
    }
}
