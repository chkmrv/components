import React from 'react';

import DemoSection from '../demo-section/demo-section';

import PopupCoreSection from './sections/popup-core';
import PopupSection from './sections/popup';
import AttachmentsSection from './sections/attachments';

export default class DemoPopups extends React.Component {
    render() {
        return (
            <div>
                <DemoSection
                    title='Popup core'
                    description={ 'Core implementation of popup' }
                    snippet={ require('!raw!./sections/popup-core') }
                    useFrame={ false }
                >
                    <PopupCoreSection/>
                </DemoSection>
                <DemoSection
                    title='Simple popup'
                    description={ 'Simple wrapper around popup-core' }
                    snippet={ require('!raw!./sections/popup') }
                    useFrame={ false }
                >
                    <PopupSection/>
                </DemoSection>
                <DemoSection
                    title='Attachments'
                    description={ 'You can choose where to attach popup' }
                    snippet={ require('!raw!./sections/attachments') }
                    useFrame={ false }
                >
                    <AttachmentsSection/>
                </DemoSection>
            </div>
        );
    }
}
