import React from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import './ProjectPage.scss';
import Tags from "../Tags/Tags";
import {AiOutlineCode} from 'react-icons/ai';
import {GoHome} from 'react-icons/go';
import data from '../projects.json'
import { Swipeable } from 'react-swipeable'



const ProjectPage = () => {
    let {id} = useParams();
    const project = data.projects[id];
    const projectsArr = data.sort;
    let history = useHistory();

    const getRoute = (direction) => {
        // const button = e.target.getAttribute('class').split("-")[1];
        const routeTo = projectsArr[getNextPage(projectsArr, direction)];
        return routeTo;
    }

    const swipe = (direction) => {
        const route = getRoute(direction);
        history.push(`/projects/${route}`)
    }

    const getNextPage = (arr, direction) => {
        const len = arr.length;
        const currentPage = projectsArr.indexOf(id);
        let nextPage = 0;
        if (direction === 'next') {
            if (currentPage + 1 < len) {
                nextPage = currentPage + 1
            } else {
                nextPage = 0;
            }
        } else if (direction === 'prev')  {
            if (currentPage -1 >= 0) {
                nextPage = currentPage - 1;
            } else {
                nextPage = len -1;
            }
        }
        return nextPage
    }

    return (
        <div className="project-page">
            <div className="project-page-wrapper">
                <span className="project-arrow-wrapper left-arrow-wrapper" >
                    <Link to={`/projects/${getRoute("prev")}`}>
                        <span className="project-prev-arrow project-arrow"> </span>
                    </Link>
                </span>
                <div className="project-page-content">
                    <Swipeable onSwipedLeft={() => swipe('prev')} onSwipedRight={() => swipe('next')}>
                        <h2 className="project-page-title">{project.name}</h2>
                        <div className="project-page-buttons">
                            <a href={project.repo} target="_blank" rel="noreferrer noopener" >
                            <span className="project-page-button">
                            <AiOutlineCode/>
                            Repo
                            </span>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer noopener">
                            <span className="project-page-button">
                                <GoHome/>
                                Demo
                            </span>
                            </a>
                        </div>
                        <p className="project-page-details">{project.summary}</p>
                        {/*<h3 className="project-page-details">App usage and details: </h3>*/}
                        <ul className="project-page-bullets">
                            {project.features.length ? <li>
                                <p>
                                    <strong>Features</strong>: {project.features.join(', ')}.
                                </p>
                            </li> : null}
                            {project.libraries.length ? <li>
                                <p>
                                    <strong>External libraries</strong>: {project.libraries.join(', ')}.
                                </p>
                            </li> : null}
                            {project.frontTags.length ? <li>
                                <p className="project-tags">
                                    <strong>Frontend tech stack</strong>:
                                    <Tags skills={project.frontTags}/>
                                </p>
                            </li> : null}
                            {project.backTags.length ? <li>
                                <p className="project-tags">
                                    <strong>Backend tech stack</strong>:
                                    <Tags skills={project.backTags}/>
                                </p>
                            </li> : null}
                        </ul>
                    </Swipeable>
                </div>
                <span className="project-arrow-wrapper right-arrow-wrapper" onClick={getRoute}>
                    <Link to={`/projects/${getRoute("next")}`}>
                        <span className="project-next-arrow project-arrow"> </span>
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default ProjectPage;