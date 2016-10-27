import React from 'react';

import DemoSection from '../demo-section/demo-section';

import AlertSection from './sections/alert';

export default class DemoPopups extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Alert'
                    description={ 'Just alert' }
                    snippet={ require('!raw!./sections/alert') }
                    useFrame={ false }
                >
                    <AlertSection/>
                </DemoSection>
            </div>
        );
    }
}
