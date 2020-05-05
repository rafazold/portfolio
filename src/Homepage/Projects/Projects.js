import React, {Component, useState} from 'react';
import './Projects.scss'
import Modal from "react-bootstrap/Modal";
import Header from "../../Header/Header";
import data from '../../projects.json'
import { Link, useParams } from "react-router-dom";
import ProjectPage from "../../ProjectPage/ProjectPage";

const Projects = () => {

    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    const handleShowModal = (e) => {
        // console.log('AAAA: ', e.target.getAttribute('projectid'));
        setCurrentProject(e.target.getAttribute('projectid'));
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

        const projectsList = data.sort;
        return (
            <div className="projects" id="projects">
                {projectsList.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)} onClick={handleShowModal}>
                        <div className="image-wrapper">
                            <Link to={`/projects/${data.projects[project].id}`}>
                                <img
                                    className="project-image"
                                    src={data.projects[project].image}
                                    alt="project image"
                                    projectId={data.projects[project].id}
                                />
                            </Link>
                        </div>
                        <div className="project-footer">
                            <span className="project-name">{data.projects[project].name}</span>
                            <a /*href={project.url}*/ target="_blank"rel="noopener noreferrer" >
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

export default Projects;