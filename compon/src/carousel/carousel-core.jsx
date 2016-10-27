import React from 'react';
import autobind from 'autobind-decorator';
import Icon from '../icon/icon';

const cn = require('bem-cn')('carousel');
const range = require('lodash/range');

const ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup');

require('./carousel.css');

export default class CarouselCore extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        autoSlide: React.PropTypes.bool,
        isDotsVisible: React.PropTypes.bool,
        isArrowsVisible: React.PropTypes.bool,
        stepCount: React.PropTypes.number,
        currentStep: React.PropTypes.number,
        stepAutoTimeout: React.PropTypes.number,
        transitionEnterTimeout: React.PropTypes.number,
        transitionLeaveTimeout: React.PropTypes.number,
        transitionName: React.PropTypes.string,
        onStepChange: React.PropTypes.func,
    }

    static defaultProps = {
        transitionName: 'slide',
        transitionEnterTimeout: 700,
        transitionLeaveTimeout: 700,
        currentStep: 1,
        stepCount: 3,
        isArrowsVisible: true,
        isDotsVisible: true,
        disabled: false,
        autoSlide: false,
        stepAutoTimeout: 5000,
    }

    constructor(props, context) {
        super(props, context);

        this.state = {
            reverse: false,
            isArrowsDisabled: false
        };
    }

    componentDidMount() {
        const { autoSlide } = this.props;
        if (autoSlide) { this.startAutoSlide(); }
    }

    componentDidUpdate() {
        const { autoSlide } = this.props;
        this.stopAutoSlide();
        if (autoSlide) { this.startAutoSlide(); }
    }

    componentWillUnmount() {
        this.stopAutoSlide();
    }

    render() {
        const {
            isDotsVisible,
            isArrowsVisible,
            transitionName,
            transitionEnterTimeout,
            transitionLeaveTimeout
        } = this.props;

        return (
            <div className={ cn({ 'transition-name': transitionName }).mix(this.props.className) }>
                <div className={ cn('content', {left: !this.state.reverse, right: this.state.reverse})}>
                    { isArrowsVisible && this.renderPrevIcon() }
                    <ReactCSSTransitionGroup
                        component='div'
                        transitionName={transitionName}
                        transitionEnterTimeout={transitionEnterTimeout}
                        transitionLeaveTimeout={transitionLeaveTimeout}
                        className={ cn('animation-container') }
                        >
                        {this.props.children}
                    </ReactCSSTransitionGroup>
                    { isArrowsVisible && this.renderNextIcon() }
                </div>
                { isDotsVisible && this.renderDotsIcons() }
            </div>
        );
    }

    renderPrevIcon() {
        return (
            <a className={ cn('control', { type: 'prev' }) }>
                <div className={ cn('icon') }
                     onClick={ this.handlePrevClick }>
                    <Icon tool='carousel-arrow-prev'/>
                </div>
            </a>
        );
    }

    renderNextIcon() {
        return (
            <a className={ cn('control', { type: 'next' }) }>
                <div className={ cn('icon') }
                     onClick={ this.handleNextClick }>
                    <Icon tool='carousel-arrow-next'/>
                </div>
            </a>
        );
    }

    renderDotsIcons() {
        const { currentStep, stepCount } = this.props;
        const dotsIcons = range(stepCount).map(step => (
            <li key={step}
                className={ cn('dot') }
                onClick={ () => { this.handleStepClick(step); }}>
                <Icon tool={ (step === currentStep) ? 'carousel-dot-active' : 'carousel-dot' }/>
            </li>
        ));

        return (
            <ul className={ cn('dot-list') }>
                {dotsIcons}
            </ul>
        );
    }

    @autobind
    handlePrevClick() {
        const {currentStep, stepCount} = this.props;
        const prevStep = currentStep > 0 ? currentStep - 1 : stepCount - 1;
        this.handleStepClick(prevStep, true);
    }

    @autobind
    handleNextClick() {
        const {currentStep, stepCount} = this.props;
        const nextStep = stepCount - currentStep > 1 ? currentStep + 1 : 0;
        this.handleStepClick(nextStep, false);
    }

    @autobind
    handleStepClick(step, reverse) {
        const { currentStep, transitionLeaveTimeout } = this.props;
        const { isArrowsDisabled } = this.state;
        reverse = typeof reverse === 'undefined' ? step < currentStep : reverse;

        if (!this.props.disabled && !isArrowsDisabled) {
            Promise.resolve()
                .then(() => new Promise(resolve => this.setState({isArrowsDisabled: true}, resolve)))
                .then(() => new Promise(resolve => setTimeout(resolve, transitionLeaveTimeout)))
                .then(() => new Promise(resolve => this.setState({isArrowsDisabled: false}, resolve)));
            this.setState({reverse});
            this.props.onStepChange(step);
        }
    }

    startAutoSlide() {
        const { stepAutoTimeout } = this.props;
        this.autoSlideTimeout = setTimeout(this.handleNextClick, stepAutoTimeout);
    }

    stopAutoSlide() {
        clearTimeout(this.autoSlideTimeout);
    }
}
