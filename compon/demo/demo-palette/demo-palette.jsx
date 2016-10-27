import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import PaletteSection from './sections/palette';

const cn = theme.className('demo-palette');
require('./sections/palette.css');

export default class DemoInputs extends React.Component {
    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='palette'
                    snippet={ require('!raw!./sections/palette') }
                    description='Project color'
                >
                    <PaletteSection />
                </DemoSection>
            </div>
        );
    }
}
