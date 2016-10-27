// Extra small screen / phone
//  xs: 0,
//  Medium screen / tablet
//  md: 768px,
//  Large screen / desktop
//  lg: 1025px,

import React from 'react';
import { Row, Col, Grid } from 'components/src/grid/all';
require('./grid.css');

const STYLE = { position: 'relative' };
const HEIGHT = { height: '60px' };

export default class GridSection extends React.Component {
    render() {
        return (
            <div style={STYLE}>
                <div className='columns'>
                    <Grid fluid>
                        <Row>
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                            <Col xs={2} md={1} lg={1} />
                        </Row>
                    </Grid>
                </div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={1} lg={12} tag='a' href='/hef' />
                    </Row>
                    <Row>
                        <Col xs={10} md={2} lg={1} />
                        <Col xs={2} md={10} lg={11} />
                    </Row>
                    <Row>
                        <Col xs={8} md={3} lg={2} />
                        <Col xs={4} md={9} lg={10} />
                    </Row>
                    <Row>
                        <Col xs={6} md={4} lg={3} />
                        <Col xs={6} md={8} lg={9} />
                    </Row>
                    <Row>
                        <Col xs={4} md={5} lg={4} />
                        <Col xs={8} md={7} lg={8} />
                    </Row>
                    <Row>
                        <Col xs={2} md={6} lg={5} />
                        <Col xs={10} md={6} lg={7} />
                    </Row>
                    <Row>
                        <Col xs={10} md={7} lg={6} />
                        <Col xs={2} md={5} lg={6} />
                    </Row>
                </Grid>
            
                <h3>Offset 4 columns</h3>
            
                <Grid fluid>
                    <Row>
                        <Col xsOffset={4} mdOffset={4} lgOffset={4} xs={8} md={8} lg={8} />
                    </Row>
                </Grid>
            
                <h3>Push Pull (можно использовать для десктопа. работает с float)</h3>
            
                <Grid fluid>
                    <Row>
                        <Col lgPush={6} xs={3}>
                            <div>1</div>
                        </Col>
                        <Col lgPull={3} xs={6}>
                            <div>2</div>
                        </Col>
                        <Col xs={3}>
                            <div>3</div>
                        </Col>
                    </Row>
                </Grid>
                        
                <h1>Остальное для планшетов и мобилок (flexbox)</h1>

                <h3>Order меняет порядок вывода</h3>

                <Grid fluid>
                    <h3>Order first: первым выводится 3-й блок на любом разрешении</h3>
                    <Row>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3} xsOrder='first'>
                            <div>3</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                    <h4>Order last: порядок вывода - последним выводится 2-й блок на любом разрешении</h4>
                    <Row>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3} xsOrder='last'>
                            <div>2</div>
                        </Col>
                        <Col xs={3}>
                            <div>3</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                    <h4>Значение unset отменяет действие order. В данном случае для xs и md первым выводится 3й блок на любом разрешении, а для lg сработает unset, и колонки будут идти в нормальном пордяке</h4>
                    <Row>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3} xsOrder='first' lgOrder='unset'>
                            <div>3</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                </Grid>
            
                <h3>Direction reverse: обратный порядок вывода</h3>
            
                <Grid fluid>
                    <Row xsDirection='reverse'>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3}>
                            <div>3</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                    <h4>mdDirection='unset' отрабатывает для планшета и десктопа, на мобильниках обратный порядок вывода</h4>
                    <Row xsDirection='reverse' mdDirection='unset'>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3}>
                            <div>3</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                </Grid>
            
                <h3>Justify: start, center, end, around, between.</h3>
            
                <Grid fluid>
                    <Row xsJustify='start'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='center'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='end'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='around'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                        <Col xs={2}>
                            <div>2</div>
                        </Col>
                        <Col xs={2}>
                            <div>3</div>
                        </Col>
                    </Row>
                    <Row xsJustify='between'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                        <Col xs={2}>
                            <div>2</div>
                        </Col>
                        <Col xs={2}>
                            <div>3</div>
                        </Col>
                    </Row>
                    <h4>lgJustify='unset'</h4>
                    <Row xsJustify='start' lgJustify='unset'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='center' lgJustify='unset'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='end' lgJustify='unset'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsJustify='around' lgJustify='unset'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                        <Col xs={2}>
                            <div>2</div>
                        </Col>
                        <Col xs={2}>
                            <div>3</div>
                        </Col>
                    </Row>
                    <Row xsJustify='between' lgJustify='unset'>
                        <Col xs={4}>
                            <div>1</div>
                        </Col>
                        <Col xs={2}>
                            <div>2</div>
                        </Col>
                        <Col xs={2}>
                            <div>3</div>
                        </Col>
                    </Row>
                </Grid>
            
                <h3>Row align: top, middle, bottom</h3>
            
                <Grid fluid>
                    <Row xsAlign='top'>
                        <Col xs={4} style={HEIGHT}>
                            <div>1</div>
                        </Col>
                        <Col xs={8}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsAlign='middle'>
                        <Col xs={4} style={HEIGHT}>
                            <div>2</div>
                        </Col>
                        <Col xs={8}>
                            <div>2</div>
                        </Col>
                    </Row>
                    <Row xsAlign='bottom'>
                        <Col xs={4} style={HEIGHT}>
                            <div>3</div>
                        </Col>
                        <Col xs={8}>
                            <div>3</div>
                        </Col>
                    </Row>
                    <h4>lgAlign='unset'</h4>
                    <Row xsAlign='top' lgAlign='unset'>
                        <Col xs={4} style={HEIGHT}>
                            <div>1</div>
                        </Col>
                        <Col xs={8}>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row xsAlign='middle' lgAlign='unset'>
                        <Col xs={4} style={HEIGHT}>
                            <div>2</div>
                        </Col>
                        <Col xs={8}>
                            <div>2</div>
                        </Col>
                    </Row>
                    <Row xsAlign='bottom' lgAlign='unset'>
                        <Col xs={4} style={HEIGHT}>
                            <div>3</div>
                        </Col>
                        <Col xs={8}>
                            <div>3</div>
                        </Col>
                    </Row>
                </Grid>

                <h3>Col align: top, middle, bottom</h3>

                <Grid fluid>
                    <Row>
                        <Col xs={4} style={HEIGHT}>
                            <div>1</div>
                        </Col>
                        <Col xs={8} xsAlign='top'>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} style={HEIGHT}>
                            <div>2</div>
                        </Col>
                        <Col xs={8} xsAlign='middle'>
                            <div>2</div>
                        </Col>
                    </Row>
                    <Row xsAlign='bottom'>
                        <Col xs={4} style={HEIGHT}>
                            <div>3</div>
                        </Col>
                        <Col xs={8} xsAlign='bottom'>
                            <div>3</div>
                        </Col>
                    </Row>
                    <h4>lgAlign='unset'</h4>
                    <Row>
                        <Col xs={4} style={HEIGHT}>
                            <div>1</div>
                        </Col>
                        <Col xs={8} xsAlign='top' lgAlign='unset'>
                            <div>1</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} style={HEIGHT}>
                            <div>2</div>
                        </Col>
                        <Col xs={8} xsAlign='middle' lgAlign='unset'>
                            <div>2</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} style={HEIGHT}>
                            <div>3</div>
                        </Col>
                        <Col xs={8} xsAlign='bottom' lgAlign='unset'>
                            <div>3</div>
                        </Col>
                    </Row>
                </Grid>

                <h3>Размер колонок наследуется согласно принципу mobile-first – тоесть от меньшего разрешения к большему. Значение xs при этом всгеда обязательно указывать.</h3>

                <Grid fluid>
                    <Row>
                        <h5>Если указано только xs=8, это значение наследуется md и lg. В данном случа md=8 и lg=8.</h5>
                    </Row>
                    <Row>
                        <Col xs={8} />
                    </Row>
                    <Row>
                        <h5>Если указано xs=8 и md=5, то lg наследует значение md. В данном случа lg=5.</h5>
                    </Row>
                    <Row>
                        <Col xs={8} md={5} />
                    </Row>
                    <Row>
                        <h5>Если указано xs=4 и lg=8, md наследует значение xs. В данном случае md=4.</h5>
                    </Row>
                    <Row>
                        <Col xs={4} lg={8} />
                    </Row>

                    <Row>
                        <h5>Это поведение распространяется и на другие свойства</h5>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3} lgOrder='first'>
                            <div>3 md=3 lgOrder='first'</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>
                            <div>1</div>
                        </Col>
                        <Col xs={3}>
                            <div>2</div>
                        </Col>
                        <Col xs={3} xsOrder='last'>
                            <div>3 md=3 xsOrder='last'</div>
                        </Col>
                        <Col xs={3}>
                            <div>4</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={5} mdOffset={4}>
                            <div>md=5 mdOffset=4</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}