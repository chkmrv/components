import React from 'react';

import DemoSection from '../demo-section/demo-section';
import IntlTextSection from './sections/intl-text';

export default class DemoTypography extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Internationalization'
                    snippet={ require('!raw!./sections/intl-text') }
                    description='You can use any languages you like'
                    useFrame={ false }
                >
                    <IntlTextSection />
                </DemoSection>
            </div>
        );
    }
}
