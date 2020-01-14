import React, {Component} from 'react';
import './Projects.scss'

class Projects extends Component {
    render() {
        const projects = [
            {
                image: 'assets/instag.png',
                name: 'Instaclone',
                url: 'https://rafa-instagram.firebaseapp.com/'
            },
            {
                image: 'assets/sentinel7.png',
                name: 'Sentinel',
                url: 'https://www.sentinel7.io'
            },
            {
                image: 'assets/instag.png',
                name: 'Instaclone 3',
                url: 'https://rafa-instagram.firebaseapp.com/'
            },
        ];
        return (
            <div className="projects" id="projects">
                {projects.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)}>
                        <img className="project-image" src={project.image} alt="project"/>
                        <div className="project-footer">
                            <span className="project-name">{project.name}</span>
                            <a href={project.url} target="_blank"rel="noopener noreferrer" >
                                <button className="project-button">Go to project<img
                                    className="button-arrow"
                                    src='assets/right-arrow.svg'
                                    alt="arrow"
                                />
                                </button>
                            </a>
                        </div>
                    </article>
                })}
            </div>
        );
    }
}

export default Projects;