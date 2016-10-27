import assign from 'lodash/assign';

export default function(object, ...args) {
    return assign.apply(undefined, [{}, object].concat(args));
}
