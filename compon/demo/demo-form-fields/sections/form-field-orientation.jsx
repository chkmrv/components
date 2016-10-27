import React from 'react';

import FormField from 'components/src/form-field/form-field';
import Input from 'components/src/input/input';

const STYLE = { paddingTop: '10px' };

export default class FormFieldOrientationSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <FormField
                        orientation='horizontal'
                        labelText='Horizontal first input'
                    >
                        <Input />
                    </FormField>
                    <FormField
                        orientation='horizontal'
                        labelText='Horizontal second input'
                    >
                        <Input />
                    </FormField>
                    <FormField
                        orientation='vertical'
                        labelText='Vertical first input'
                    >
                        <Input />
                    </FormField>
                    <FormField
                        orientation='vertical'
                        labelText='Vertical second input'
                    >
                        <Input />
                    </FormField>
                </div>
            </div>
        );
    }
}
