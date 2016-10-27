import React from 'react';
import Carousel from 'components/src/carousel/carousel';

const STYLE = { padding: '10px 20px 0' };

export default class CarouselSection extends React.Component {
    render() {
        return (
            <div>
                <div style={ STYLE }>
                    <Carousel>
                        <div style={{backgroundColor: '#efefef', minHeight: '100px', padding: '40px 0'}}>element</div>
                        <div style={{backgroundColor: '#337E8D', minHeight: '100px', padding: '40px 0'}}>element</div>
                        <div style={{backgroundColor: '#30b248', minHeight: '100px', padding: '40px 0'}}>element</div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
