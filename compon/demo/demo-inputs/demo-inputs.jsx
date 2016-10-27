import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import InputSection from './sections/input';
import InputPlaceholderSection from './sections/input-placeholder';
import InputMaxLengthSection from './sections/input-maxlength';
import InputAddonText from './sections/input-addon-text';
import InputErrorSection from './sections/input-error';
import InputWithMaskSection from './sections/input-with-mask';

const cn = theme.className('demo-inputs');

export default class DemoInputs extends React.Component {
    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='Input'
                    snippet={ require('!raw!./sections/input') }
                    description='Simple input'
                >
                    <InputSection />
                </DemoSection>
                <DemoSection
                    title='Input'
                    snippet={ require('!raw!./sections/input') }
                    description='Simple input'
                >
                    <InputSection />
                </DemoSection>
                <DemoSection
                    title='Input with placeholder'
                    snippet={ require('!raw!./sections/input-placeholder') }
                    description='Placeholder will be hidden when you start typing'
                >
                    <InputPlaceholderSection />
                </DemoSection>
                <DemoSection
                    title='Input with maximum length of 10 characters'
                    snippet={ require('!raw!./sections/input-maxlength') }
                    description='Input can have maxLength property'
                >
                    <InputMaxLengthSection />
                </DemoSection>
                <DemoSection
                    title='Input with addonText'
                    snippet={ require('!raw!./sections/input-addon-text') }
                    description='Addon text in end of the line'
                >
                    <InputAddonText />
                </DemoSection>
                <DemoSection
                    title='Input with error'
                    snippet={ require('!raw!./sections/input-error') }
                    description='Input can render errors'
                    useFrame={ false }
                >
                    <InputErrorSection />
                </DemoSection>
                <DemoSection
                    title='MaskedInput'
                    snippet={ require('!raw!./sections/input-with-mask') }
                    description='Input can have masks'
                >
                    <InputWithMaskSection />
                </DemoSection>
            </div>
        );
    }
}
