import React from 'react';
import Search from 'components/src/search/search';

const STYLE = { paddingBottom: '10px', width: '250px' };

export default class SearchSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            one: 'Normal search',
            two: 'Round search',
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Search
                        value={ this.state.one }
                        view='normal'
                        onChange={ one => {
                            this.setState({ one });
                        } }
                    />
                </div>
                <div style={ STYLE }>
                    <Search
                        value={ this.state.two }
                        view='round'
                        onChange={ two => {
                            this.setState({ two });
                        } }
                    />
                </div>
            </div>
        );
    }
}
