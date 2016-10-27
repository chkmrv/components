import React from 'react';
import autobind from 'autobind-decorator';
import debounce from 'debounce';

import Tether from './tether';
import RenderInBody from '../render-in-body/render-in-body';

export default class Popup extends React.Component {
    static propTypes = {
        preventMouseDown: React.PropTypes.bool,
        enableSmartPosition: React.PropTypes.bool,
        popupContent: React.PropTypes.node.isRequired,
        popupAttachment: React.PropTypes.string,
        popupOffset: React.PropTypes.string,
        targetAttachment: React.PropTypes.string,
        targetOffset: React.PropTypes.string,
        onClickOutside: React.PropTypes.func,
        onAttachmentAutoChange: React.PropTypes.func,
    }

    static defaultProps = {
        popupAttachment: 'top left',
        targetAttachment: 'top right',
        view: 'hint',
        enableSmartPosition: true,
        preventMouseDown: false
    };

    tether = null;
    tetherOptions = null;
    clickEventBindTimeout = null;
    partner = null;

    constructor(props, context) {
        super(props, context);

        this.state = {
            popupAttachment: props.popupAttachment,
            targetAttachment: props.targetAttachment,
        };

        this.handleUpdateAttachClasses = debounce(this.handleUpdateAttachClasses, 200).bind(this);

        this.renderInBody = new RenderInBody();
    }

    componentDidMount() {
        this.renderInBody.attach();

        this.ensureClickEvent();
    }

    componentWillUnmount() {
        this.renderInBody.detach();

        this.ensureClickEvent(false);

        if (this.tether) {
            this.tether.destroy();
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.targetAttachment !== this.props.targetAttachment
            || nextProps.popupAttachment !== this.props.popupAttachment
        ) {
            this.setState({
                popupAttachment: nextProps.popupAttachment,
                targetAttachment: nextProps.targetAttachment
            });
        }
    }

    componentDidUpdate(prevProps) {
        let { popupAttachment, targetAttachment, popupOffset, targetOffset, onClickOutside } = this.props;

        if (this.tetherOptions) {
            this.renderContent();
        }

        if (prevProps.onClickOutside !== onClickOutside) {
            this.ensureClickEvent();
        }

        if (prevProps.targetAttachment !== targetAttachment
            || prevProps.popupAttachment !== popupAttachment
            || prevProps.popupOffset !== popupOffset
            || prevProps.targetOffset !== targetOffset
        ) {
            this.updateTether();
        }
    }

    render() {
        return <div />;
    }

    renderContent() {
        const { popupContent, ...props } = this.props;

        this.renderInBody.render(
            this,
            <div { ...props } onMouseDown={ this.handleMouseDown }>
                { popupContent }
            </div>,
            this.handlePopupContentRender
        );
    }

    getRenderInBody() {
        return this.renderInBody;
    }

    setTarget(target) {
        this.target = target;

        this.updateTether();
        this.renderContent();
    }

    /** Popup won't hide if you click on partner */
    setHidePartner(partner) {
        this.partner = partner;
    }

    updateTether() {
        let options = {
            enabled: true,
            element: this.renderInBody.getElement(),
            target: this.target,
            attachment: this.props.popupAttachment,
            targetAttachment: this.props.targetAttachment,
            onUpdateAttachClasses: this.handleUpdateAttachClasses,
        };

        if (this.props.popupOffset) {
            options.offset = this.props.popupOffset;
        }

        if (this.props.targetOffset) {
            options.targetOffset = this.props.targetOffset;
        }

        if (this.props.enableSmartPosition) {
            options.constraints = [{
                to: 'window',
                attachment: 'together'
            }];
        }

        if (!this.tether) {
            this.tether = new Tether(options);
        } else {
            this.tether.setOptions(options);
        }
    }

    @autobind
    handlePopupContentRender() {
        if (this.tether) {
            this.tether.position();
        }
    }

    handleUpdateAttachClasses(elementAttach, targetAttach) {
        const nextPopupAttachment = `${elementAttach.top} ${elementAttach.left}`;
        const nextTargetAttachment = `${targetAttach.top} ${targetAttach.left}`;
        const { popupAttachment, targetAttachment } = this.state;

        if (nextTargetAttachment !== targetAttachment || nextPopupAttachment !== popupAttachment) {
            if (this.props.onAttachmentAutoChange) {
                this.props.onAttachmentAutoChange(nextPopupAttachment, nextTargetAttachment);
            }

            // Tether tells new attachments to us, so let's use them
            this.setState({
                popupAttachment: nextPopupAttachment,
                targetAttachment: nextTargetAttachment,
            });
        }
    }

    @autobind
    handleMouseDown(e) {
        if (this.props.preventMouseDown) {
            e.preventDefault();
        }
    }

    ensureClickEvent(binded = true) {
        // We need timeouts to not to catch the event that causes
        // popup opening (because it propagates to the `window`).
        if (this.clickEventBindTimeout) {
            clearTimeout(this.clickEventBindTimeout);
            this.clickEventBindTimeout = null;
        }

        if (binded) {
            this.clickEventBindTimeout = setTimeout(() => {
                document.addEventListener('mousedown', this.onWindowMouseDown);
            }, 0);
        } else {
            document.removeEventListener('mousedown', this.onWindowMouseDown);
        }
    }

    @autobind
    onWindowMouseDown(e) {
        if (!this.props.onClickOutside) {
            return;
        }

        if (!this.tether || !this.isEventOutsideClientBounds(e, this.tether.options.element)) {
            return;
        }

        if (!this.partner || this.isEventOutsideClientBounds(e, this.partner)) {
            this.props.onClickOutside();
        }
    }

    isEventOutsideClientBounds(e, element) {
        let rect = element.getBoundingClientRect();
        return e.clientX < rect.left || e.clientX > rect.right
            || e.clientY < rect.top || e.clientY > rect.bottom;
    }
}
