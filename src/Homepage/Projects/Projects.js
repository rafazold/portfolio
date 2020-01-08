import React, {Component} from 'react';
import './Projects.scss'

class Projects extends Component {
    render() {
        const projects = [
            {
            image: 'assets/instag.png',
            name: 'Instaclone',
            url: 'https://rafazold.github.io/instagram-ui'
            },
            {
                image: 'assets/instag.png',
                name: 'Instaclone 2',
                url: 'https://rafazold.github.io/instagram-ui'
            },
            {
                image: 'assets/instag.png',
                name: 'Instaclone 3',
                url: 'https://rafazold.github.io/instagram-ui'
            },
        ];
        return (
            <div>
                {projects.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)}>
                        <img className="project-image" src={project.image} alt="project"/>
                        <span className="project-name" >{project.name}</span>
                        <button className="project-button" >Go to project<img src='assets/right-arrow.svg' alt="" /></button>
                    </article>
                })}
            </div>
        );
    }
}

export default Projects;