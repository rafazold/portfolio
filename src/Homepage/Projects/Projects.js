import React, {Component, useState} from 'react';
import './Projects.scss'
import Modal from "react-bootstrap/Modal";
import Header from "../../Header/Header";
import projects from '../../projects.json'
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

        const projectsList = [
            {
                id: 'covid',
                image: 'assets/covidnineteen.png',
                name: 'Covid 19',
                url: 'https://covidnineteen.today/'
            },
            {
                id: 'instaclone',
                image: 'assets/instag.png',
                name: 'Instaclone',
                url: 'https://rafa-instagram.firebaseapp.com/'
            },
            {
                id: 'sentinel',
                image: 'assets/sentinel7.png',
                name: 'Sentinel',
                url: 'https://sentinel-c19c8.web.app/'
            },
            {
                id: 'bezeq',
                image: 'assets/bezeq.png',
                name: 'Bezeq',
                url: 'https://bezeq-25e26.firebaseapp.com/'
            },
        ];
        return (
            <div className="projects" id="projects">
                {projectsList.map(project => {
                    return <article className="project-wrapper" key={Math.random().toString(36).substring(2, 15)} onClick={handleShowModal}>
                        <div className="image-wrapper">
                            <a /*href={project.url}*/ target="_blank" rel="noopener noreferrer">
                                <img
                                    className="project-image"
                                    src={project.image}
                                    alt="project image"
                                    projectId={project.id}
                                />
                            </a>
                        </div>
                        <div className="project-footer">
                            <span className="project-name">{project.name}</span>
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
                <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    centered
                    size="xl"
                >
                    <Modal.Header closeButton>
                        <Header />
                    </Modal.Header>
                    <Modal.Body>
                        <ProjectPage project={projects[currentProject]}/>
                    </Modal.Body>
                </Modal>
            </div>
        );
}

export default Projects;