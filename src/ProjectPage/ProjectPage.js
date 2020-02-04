import React, {Component} from 'react';
import Header from "../Header/Header";
import './ProjectPage.scss'
import Tags from "../Tags/Tags";

class ProjectPage extends Component {
    render() {
        return (
            <div className="project-page">
                <div className="project-page-content">
                    <h2 className="project-page-title">Instaclone</h2>
                    <h3 className="project-page-details">Some text about the project, for what, witch technologie, kpi
                        etc... Some text about the
                        project, for what, witch technologie, kpi etc...Some text about the project, for what,
                        witch technologie, kpi etc...Some text about the project, for what</h3>
                    <Tags
                    skills={
                        [
                            'HTML 5',
                            'CSS 3',
                            'Javascript',
                            'Saas',
                            'Node.js',
                            'Webpack',
                            'ES6',
                            'React',
                            'MongoDB',
                            'Git'
                        ]
                    }
                    />
                </div>
            </div>
        );
    }
}

export default ProjectPage;