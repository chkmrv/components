import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import GridSection from './sections/grid';

const cn = theme.className('demo-grid');

export default class DemoGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='Grid'
                    snippet={ require('!raw!./sections/grid') }
                    description='The simplest type of this component'
                >
                    <GridSection />
                </DemoSection>
            </div>
        );
    }
}
