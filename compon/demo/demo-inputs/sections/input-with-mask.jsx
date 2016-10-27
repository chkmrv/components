import React from 'react';

import MaskedInput from 'components/src/input/masked-input';

const CUSTOM_CHARACTERS = {
    'w': {
        validate: char => {
            return /[asdASD]/.test(char);
        },
        transform: char => {
            return char.toUpperCase();
        }
    }
};

const BLOCK_STYLE = { padding: '10px', width: '250px' };
const LABEL_STYLE = { display: 'inline-block', width: '200px', verticalAlign: 'middle' };

export default class MaskedInputWithMaskSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            numeric: '',
            letter: '',
            letterUpperCase: '',
            cyrillic: '',
            cyrillicUpperCase: '',
            roman: '',
            romanUpperCase: '',
            alphanumeric: '',
            alphanumericUpperCase: '',
            custom: '',
            placeholder: '',
            dynamic: '',
            dynamicFlag: true,
            insertMode: '',
        };
    }

    render() {
        return (
            <div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Cyrillic letter mask</div>
                    <MaskedInput
                        value={ this.state.cyrillic }
                        onChange={ cyrillic => { this.setState({ cyrillic }); } }
                        mask='ccc-ccc-ccc cc'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Forced upper-case cyrillic letter mask</div>
                    <MaskedInput
                        value={ this.state.cyrillicUpperCase }
                        onChange={ cyrillicUpperCase => { this.setState({ cyrillicUpperCase }); } }
                        mask='CCC-CCC-CCC CC'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Roman letter mask</div>
                    <MaskedInput
                        value={ this.state.roman }
                        onChange={ roman => { this.setState({ roman }); } }
                        mask='rrr-rrr-rrr rr'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Forced upper-case roman letter mask</div>
                    <MaskedInput
                        value={ this.state.romanUpperCase }
                        onChange={ romanUpperCase => { this.setState({ romanUpperCase }); } }
                        mask='RRR-RRR-RRR RR'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Letter mask</div>
                    <MaskedInput
                        value={ this.state.letter }
                        onChange={ letter => { this.setState({ letter }); } }
                        mask='aaa-aaa-aaa aa'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Forced upper-case letter mask</div>
                    <MaskedInput
                        value={ this.state.letterUpperCase }
                        onChange={ letterUpperCase => { this.setState({ letterUpperCase }); } }
                        mask='AAA-AAA-AAA AA'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Alphanumeric mask</div>
                    <MaskedInput
                        value={ this.state.alphanumeric }
                        onChange={ alphanumeric => { this.setState({ alphanumeric }); } }
                        mask='***-***-*** **'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Forced upper-case alphanumeric mask</div>
                    <MaskedInput
                        value={ this.state.alphanumericUpperCase }
                        onChange={ alphanumericUpperCase => { this.setState({ alphanumericUpperCase }); } }
                        mask='###-###-### ##'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Numeric mask</div>
                    <MaskedInput
                        value={ this.state.numeric }
                        onChange={ numeric => { this.setState({ numeric }); } }
                        mask='111-111-111 11'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Custom mask (A,S or D letters)</div>
                    <MaskedInput
                        value={ this.state.custom }
                        onChange={ custom => { this.setState({ custom }); } }
                        mask='www-www-www ww'
                        formatCharacters={ CUSTOM_CHARACTERS }
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Custom placeholder character</div>
                    <MaskedInput
                        value={ this.state.placeholder }
                        onChange={ placeholder => { this.setState({ placeholder }); } }
                        mask='***-***-*** **'
                        maskChar='#'
                    />
                </div>
                <div style={ BLOCK_STYLE }>
                    <div style={ LABEL_STYLE }>Insert mode (useful for phones/faxes etc)</div>
                    <MaskedInput
                        value={ this.state.insertMode }
                        onChange={ insertMode => { this.setState({ insertMode }); } }
                        mask='+7 (111) 111-11-11'
                        typeMode='insert'
                    />
                </div>
            </div>
        );
    }
}
