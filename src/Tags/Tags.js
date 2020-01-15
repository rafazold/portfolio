import React, {Component} from 'react';
import Tag from "./Tag/Tag";
import './Tags.scss'

class Tags extends Component {
    render() {
        return (
            <div className="skills">
                {this.props.skills.map(skill => {
                    return <span key={Math.random().toString(36).substring(2, 15)} className="skill-wrapper">
                        <Tag>
                            {skill}
                        </Tag>
                    </span>
                })}
            </div>
        );
    }
}

export default Tags;