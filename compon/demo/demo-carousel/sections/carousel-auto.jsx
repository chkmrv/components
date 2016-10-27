import React from 'react';
import Carousel from 'components/src/carousel/carousel';
const STYLE = { padding: '10px 20px 0' };

export default class CarouselAutoSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentAutoStep: 1,
            transitionName: 'slide',
            stepCount: 3,
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500,
            disabled: false,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Carousel
                        autoSlide = {true}
                        stepAutoTimeout = {5000}
                        transitionName = {this.state.transitionName}
                        transitionEnterTimeout = {this.state.transitionEnterTimeout}
                        transitionLeaveTimeout = {this.state.transitionLeaveTimeout}
                    >
                        <div style={{backgroundColor: '#efefef', minHeight: '100px', padding: '40px 0'}}>element</div>
                        <div style={{backgroundColor: '#337E8D', minHeight: '100px', padding: '40px 0'}}>element</div>
                        <div style={{backgroundColor: '#30b248', minHeight: '100px', padding: '40px 0'}}>element</div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
