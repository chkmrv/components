import React from 'react';
import Dropdown from 'components/src/dropdown/dropdown';

const STYLE = { paddingBottom: '10px' };

const OPTIONS = [
    {
        value: 'gaga',
        text: 'No he cant read my poker face (Shes got to love nobody) P-p-p-poker face, p-p-p-poker face (mum mum mum mah) P-p-p-poker face, p-p-p-poker face'
    },
    {
        value: 'foxe',
        text: (
            <div style={ { color: '#337e8d', overflow: 'hidden', textOverflow: 'ellipsis' } }>
                {
                    'Dog goes woof Cat goes meow Bird goes tweet and mouse goes squeek ' +
                    'Cow goes moo Frog goes croak and the elephant goes toot ' +
                    'Ducks say quack and fish go blub and the seal goes ow ow ow ow ow ' +
                    'But theres one sound That no one knows What does the fox say?'
                }
            </div>
        )
    },
];

export default class DropDownLongTextSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: OPTIONS[0].value,
        };
    }


    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Dropdown
                        style={ { width: '500px' } }
                        options={ OPTIONS }
                        value={ this.state.value }
                        disabled={false}
                        onChange={ value => { this.setState({ value }); } }
                        />
                </div>
            </div>
        );
    }
}
