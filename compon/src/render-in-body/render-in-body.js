import ReactDOM from 'react-dom';

export default class RenderInBody {
    attach() {
        if (!this.el) {
            this.el = document.createElement('div');
            document.body.appendChild(this.el);
        }
    }

    detach() {
        if (this.el) {
            ReactDOM.unmountComponentAtNode(this.el);
            document.body.removeChild(this.el);
            this.el = null;
        }
    }

    getElement() {
        return this.el;
    }

    render(context, children, onRender) {
        if (this.el) {
            ReactDOM.unstable_renderSubtreeIntoContainer(
                context,
                children,
                this.el,
                onRender
            );
        }
    }
}
