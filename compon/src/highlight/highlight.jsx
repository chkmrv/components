import React from 'react';

export default class Highlight extends React.Component {
    static propTypes = {
        highlighter: React.PropTypes.object.isRequired,
        text: React.PropTypes.string,
    }

    render() {
        return (
            <pre>
                <code
                    dangerouslySetInnerHTML={ {
                        __html: this.props.highlighter.highlight(this.props.text)
                    } }
                />
            </pre>
        );
    }
}
