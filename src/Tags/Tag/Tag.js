import React, {Component} from 'react';
import './Tag.scss'

class Tag extends Component {
    render() {
        return (
            <span className="skill">
                {this.props.children}
            </span>
        );
    }
}

export default Tag;