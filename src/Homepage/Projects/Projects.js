import React, {Component} from 'react';
import './Projects.scss'

class Projects extends Component {
    render() {
        const projects = [
            {
                image: 'assets/covidnineteen.png',
                name: 'Covid 19',
                url: 'https://covidnineteen.today/'
            },
            {
                image: 'assets/instag.png',
                name: 'Instaclone',
                url: 'https://rafa-instagram.firebaseapp.com/'
            },
            {
                image: 'assets/sentinel7.png',
                name: 'Sentinel',
                url: 'https://sentinel-c19c8.web.app/'
            },
            {
                image: 'assets/bezeq.png',
                name: 'Bezeq',
                url: 'https://bezeq-25e26.firebaseapp.com/'
            },
        ];
        return (
            <div className="projects" id="projects">
                {projects.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)}>
                        <div className="image-wrapper">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="project-image"
                                    src={project.image}
                                    alt="project"
                                />
                            </a>
                        </div>
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