import React from 'react';

import Dropdown from 'components/src/dropdown/dropdown';

const STYLE = { paddingBottom: '10px' };
const DROPDOWN_STYLE = { width: '500px' };

export default class DropDownEmptyOptionsSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Dropdown
                        style={ DROPDOWN_STYLE }
                        options={ [] }
                        placeholder='Select something'
                    />
                </div>
            </div>
        );
    }
}
