import React from 'react';
import './Projects.scss'
import data from '../../projects.json'
import { Link } from "react-router-dom";

const Projects = () => {

        const projectsList = data.sort;
        return (
            <div className="projects" id="projects">
                {projectsList.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)}>
                        <div className="image-wrapper">
                            <Link to={`/projects/${data.projects[project].id}`}>
                                <img
                                    className="project-image"
                                    src={data.projects[project].image}
                                    alt="project example"
                                />
                            </Link>
                        </div>
                        <div className="project-footer">
                            <span className="project-name">{data.projects[project].name}</span>
                            <Link to={`/projects/${data.projects[project].id}`}>
                                <button className="project-button">Go to project<img
                                    className="button-arrow"
                                    src='assets/right-arrow.svg'
                                    alt="arrow"
                                />
                                </button>
                            </Link>
                        </div>
                    </article>
                })}
            </div>
        );
}

export default Projects;