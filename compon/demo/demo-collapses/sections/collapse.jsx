import React from 'react';

import Collapse from 'components/src/collapse/collapse';

const STYLE = { paddingTop: '10px' };

export default class CollapseSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isExpanded: false,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Collapse
                        isExpanded={ this.state.isExpanded }
                        toggleText={ `Click to ${this.state.isExpanded ? 'hide' : 'show'} content` }
                        onToggleClick={ () => { this.setState({ isExpanded: !this.state.isExpanded }); } }
                    >
                        Collapse content
                    </Collapse>
                </div>
            </div>
        );
    }
}
