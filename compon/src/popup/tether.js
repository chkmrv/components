import Tether from 'tether';

import './tether.css';

if (!Tether.modules.filter(mod => mod.__plugin === 'updateAttachClasses').length) {
    Tether.modules.push({
        __plugin: 'updateAttachClasses',

        position() {

        },

        initialize() {
            let updateAttachClasses = this.updateAttachClasses.bind(this);
            this.updateAttachClasses = (elementAttach, targetAttach) => {
                updateAttachClasses(elementAttach, targetAttach);
                if (this.options.onUpdateAttachClasses) {
                    this.options.onUpdateAttachClasses(elementAttach, targetAttach);
                }
            };
        }
    });
}

export default Tether;
