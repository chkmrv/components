import React from 'react';
import Carousel from 'components/src/carousel/carousel';
const STYLE = { padding: '10px 20px 0' };

export default class CarouselHidNavSection extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentNewStep: 1,
            stepCount: 3,
        };
    }

    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Carousel
                        isDotsVisible = {false}
                        isArrowsVisible = {false}
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
