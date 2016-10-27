import React from 'react';
import * as theme from 'components/src/theme';

import DemoSection from '../demo-section/demo-section';
import SearchSection from './sections/search';
import SearchViewSection from './sections/search-view';
import SearchPlaceholderSection from './sections/search-placeholder';
import SearchErrorSection from './sections/search-error';

const cn = theme.className('demo-searchs');

export default class DemoSearchs extends React.Component {
    render() {
        return (
            <div className={ cn }>
                <DemoSection
                    title='Search'
                    snippet={ require('!raw!./sections/search') }
                    description='Simple search'
                >
                    <SearchSection />
                </DemoSection>
                <DemoSection
                    title='Search view'
                    snippet={ require('!raw!./sections/search-view') }
                    description='Search ships with two available views'
                >
                    <SearchViewSection />
                </DemoSection>
                <DemoSection
                    title='Search with placeholder'
                    snippet={ require('!raw!./sections/search-placeholder') }
                    description='Placeholder will be hidden when you start typing'
                >
                    <SearchPlaceholderSection />
                </DemoSection>
                <DemoSection
                    title='Search with error'
                    snippet={ require('!raw!./sections/search-error') }
                    description='Search can render errors'
                >
                    <SearchErrorSection />
                </DemoSection>
            </div>
        );
    }
}
