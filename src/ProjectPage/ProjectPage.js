import React, {useState} from 'react';
import Header from "../Header/Header";
import './ProjectPage.scss';
import Tags from "../Tags/Tags";
import {AiOutlineCode} from 'react-icons/ai';
import {GoHome} from 'react-icons/go';
import projects from '../projects.json'


// const project = projects.instaclone;

const ProjectPage = ({project}) => {

    return (
        <div className="project-page">
            <div className="project-page-content">
                <h2 className="project-page-title">{project.name}</h2>
                <div className="project-page-buttons">
                    <a href={"#"}>
                        <span className="project-page-button">
                        <AiOutlineCode/>
                        Repo
                        </span>
                    </a>
                    <a href={"#"}>
                        <span className="project-page-button">
                            <GoHome/>
                            Demo
                        </span>
                    </a>
                </div>
                <h3 className="project-page-details">{project.summary}</h3>
                {/*<h3 className="project-page-details">App usage and details: </h3>*/}
                <ul className="project-page-bullets">
                    {project.features.length ? <li>
                        <p>
                            <strong>Features</strong>: {project.features.join(', ')}
                        </p>
                    </li> : null}
                    {project.libraries.length ? <li>
                        <p>
                            <strong>External libraries</strong>: {project.libraries.join(', ')}
                        </p>
                    </li> : null}
                    {project.frontTags.length ? <li>
                        <p>
                            <strong>Frontend tech stack</strong>:
                            <Tags skills={project.frontTags}/>
                        </p>
                    </li> : null}
                    {project.backTags.length ? <li>
                        <p>
                            <strong>Backend tech stack</strong>:
                            <Tags skills={project.backTags}/>
                        </p>
                    </li> : null}
                </ul>
            </div>
        </div>
    );
}

export default ProjectPage;