import React from 'react';

import Collapse from 'components/src/collapse/collapse';
import CollapseGroup from 'components/src/collapse/collapse-group';

export default class CollapseGroupSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isFirstExpanded: false,
            isSecondExpanded: false,
        };
    }

    render() {
        return (
            <div>
                <CollapseGroup>
                    <Collapse
                        isExpanded={ this.state.isFirstExpanded }
                        toggleText={ `Click to ${this.state.isExpanded ? 'hide' : 'show'} content` }
                        onToggleClick={ () => { this.setState({ isFirstExpanded: !this.state.isFirstExpanded }); } }
                    >
                        First collapse content
                    </Collapse>
                    <Collapse
                        isExpanded={ this.state.isSecondExpanded }
                        toggleText={ `Click to ${this.state.isExpanded ? 'hide' : 'show'} content` }
                        onToggleClick={ () => { this.setState({ isSecondExpanded: !this.state.isSecondExpanded }); } }
                    >
                        Second collapse content
                    </Collapse>
                </CollapseGroup>
            </div>
        );
    }
}
