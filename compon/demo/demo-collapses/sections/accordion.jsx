import React from 'react';

import Collapse from 'components/src/collapse/collapse';
import CollapseGroup from 'components/src/collapse/collapse-group';

export default class AccordionSection extends React.Component {
    render() {
        return (
            <div>
                <CollapseGroup isAccordion={ true }>
                    <Collapse toggleText='Click me'>
                        First collapse content
                    </Collapse>
                    <Collapse toggleText='Click me'>
                        Second collapse content
                    </Collapse>
                    <Collapse toggleText='Click me'>
                        Third collapse content
                    </Collapse>
                </CollapseGroup>
            </div>
        );
    }
}
