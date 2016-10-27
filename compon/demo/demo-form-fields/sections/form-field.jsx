import React from 'react';

import FormField from 'components/src/form-field/form-field';
import Input from 'components/src/input/input';

const STYLE = { paddingTop: '10px' };

export default class FormFieldSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <FormField labelText='First input'>
                        <Input />
                    </FormField>
                    <FormField labelText='Second input'>
                        <Input />
                    </FormField>
                </div>
            </div>
        );
    }
}
