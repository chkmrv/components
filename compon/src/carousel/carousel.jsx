import React from 'react';
import CarouselCore from 'components/src/carousel/carousel-core';

const cn = require('bem-cn')('carousel');
require('./carousel.css');

export default class Carousel extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        autoSlide: React.PropTypes.bool,
        isDotsVisible: React.PropTypes.bool,
        isArrowsVisible: React.PropTypes.bool,
        stepAutoTimeout: React.PropTypes.number,
        transitionEnterTimeout: React.PropTypes.number,
        transitionLeaveTimeout: React.PropTypes.number,
        transitionName: React.PropTypes.string,
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            currentStep: 0
        };
    }

    render() {
        const {currentStep} = this.state;

        return (
            <CarouselCore
                stepCount={React.Children.count(this.props.children)}
                currentStep={currentStep}
                onStepChange={currentStep => this.setState({currentStep})}
                {...this.props}>
                <div key={currentStep} className={ cn('slider-box') }>
                     {this.props.children[currentStep]}
                </div>
            </CarouselCore>
        );
    }
}