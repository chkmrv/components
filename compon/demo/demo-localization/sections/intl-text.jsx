import React from 'react';
import moment from 'moment';

import DemoExample from '../../demo-example/demo-example';
import DatePicker from 'components/src/date-picker/date-picker';
import FormField from 'components/src/form-field/form-field';
import RadioGroup from 'components/src/radio/radio-group';
import IntlText from 'components/src/intl-text/intl-text';
import LocaleProvider from 'components/src/intl-text/locale-provider';
import bundle from './locale';

import './intl-text.css';
const cn = require('bem-cn')('intl-text');

export default class IntlTextSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            locale: 'ru-RU',
            from: moment().format('DD.MM.YYYY'),
            to: moment().format('DD.MM.YYYY'),
        };
    }

    render() {
        const param = <IntlText code='pattern-param' style={ { color: '#ff0000' } } />;

        return (
            <div className={ cn }>
                <LocaleProvider locale={ this.state.locale } bundle={ bundle }>
                    <FormField labelText={ <IntlText code='select-language' /> }>
                        <RadioGroup
                            orientation='horizontal'
                            value={ this.state.locale }
                            options={ [
                                { value: 'ru-RU', text: <IntlText code='language-ru' /> },
                                { value: 'en-US', text: <IntlText code='language-en' /> },
                            ] }
                            onChange={ locale => { this.setState({ locale }); } }
                        />
                    </FormField>
                    <DemoExample
                        className={ cn('example') }
                        view='row'
                        header={ <IntlText code='just-text' /> }
                    >
                        <div className={ cn('title') }>
                            <IntlText code='one-title'/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='one-1'/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='one-2'/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='one-3'/>
                        </div>
                    </DemoExample>
                    <DemoExample
                        className={ cn('example') }
                        view='row'
                        header={ <IntlText code='with-param' params={ { param } } /> }
                    >
                        <div className={ cn('title') }>
                            <IntlText code='pattern-title'/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-1' params={ { param } }/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-2' params={ { param } }/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-3' params={ { param } }/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-4' params={ { param } }/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-5' params={ { param } }/>
                        </div>
                        <div className={ cn('line') }>
                            <IntlText code='pattern-6' params={ { param } }/>
                        </div>
                    </DemoExample>
                    <DemoExample
                        className={ cn('example') }
                        view='row'
                        header={ <IntlText code='with-markup' /> }
                    >
                        <div className={ cn('line') }>
                            <IntlText code='raw-markup' renderAsInnerHtml={ true }/>
                        </div>
                    </DemoExample>
                    <DemoExample
                        className={ cn('example') }
                        view='row'
                        header={ <IntlText code='with-components' /> }
                    >
                        <div className={ cn('line') }>
                            <IntlText
                                code='select-period'
                                params={ {
                                    from: (
                                        <DatePicker
                                            value={ this.state.from }
                                            onChange={ from => { this.setState({ from }); } }
                                        />
                                    ),
                                    to: (
                                        <DatePicker
                                            value={ this.state.to }
                                            onChange={ to => { this.setState({ to }); } }
                                        />
                                    ),
                                } }
                            />
                        </div>
                    </DemoExample>
                </LocaleProvider>
            </div>
        );
    }
}
