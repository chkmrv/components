import React from 'react';

const STYLE = { paddingBottom: '10px' };

export default class PaletteSection extends React.Component {

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <div className='palette'>
                        <div className='row'>
                            <div className='col-md-2'>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_project'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$project</div>
                                        <div className='text'>hsl(108%, 67%, 36%)</div>
                                        <div className='text'>#369a1e</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_base'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$base</div>
                                        <div className='text'>hsl(0%, 0%, 0%)</div>
                                        <div className='text'>#000</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_clean'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$clean</div>
                                        <div className='text'>hsl(0%, 0%, 0%)</div>
                                        <div className='text'>#000</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_alert'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$alert</div>
                                        <div className='text'>hsl(0%, 75%, 60%)</div>
                                        <div className='text'>#e54d4d</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_form'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$form</div>
                                        <div className='text'>hsl(35%, 100%, 52%)</div>
                                        <div className='text'>#ff9908</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_active'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>$active</div>
                                        <div className='text'>hsl(43%, 100%, 56%)</div>
                                        <div className='text'>#ffc020</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_project-l-40'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($project, 40)</div>
                                        <div className='text'>hsl(108%, 67%, 76%)</div>
                                        <div className='text'>#a9eb99</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_base-l-20'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($base, 20)</div>
                                        <div className='text'>hsl(0%, 0%, 20%)</div>
                                        <div className='text'>#333</div>
                                    </div>
                                </div>
                                <div className='color'></div>
                                <div className='color'></div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_form-l-20'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($form, 20)</div>
                                        <div className='text'>hsl(35%, 100%, 72%)</div>
                                        <div className='text'>#ffc36e</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_project-l-60'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($project, 60)</div>
                                        <div className='text'>hsl(108%, 67%, 96%)</div>
                                        <div className='text'>#f1fcee</div>
                                    </div>
                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_base-l-40'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($base, 40)</div>
                                        <div className='text'>hsl(0%, 0%, 40%)</div>
                                        <div className='text'>#666</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='color'>

                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_base-l-60'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($base, 60)</div>
                                        <div className='text'>hsl(0%, 0%, 60%)</div>
                                        <div className='text'>#999</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-2'>
                                <div className='color'>

                                </div>
                                <div className='color'>
                                    <div className='color__cntr color__cntr_color_base-l-80'></div>
                                    <div className='color__text'>
                                        <div className='text text_bold'>lighten($base, 80)</div>
                                        <div className='text'>hsl(0%, 0%, 80%)</div>
                                        <div className='text'>#ccc</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
