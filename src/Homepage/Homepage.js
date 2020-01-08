import React, {Component} from 'react';
import './Homepage.scss'
import Tags from "../Tags/Tags";
import Projects from "./Projects/Projects";

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <img className="curved-arrow" src="./assets/curved-arrow.svg" alt="arrow"/>
                <img className="profile-picture" src="./assets/rafa.png" alt="avatar"/>
                <div className="homepage-middle-text">
                    <h1 className="homepage-title">Hello!</h1>
                    <p className="homepage-summary">My name is Rafael Zoldan, I’m a passionate, motivated and
                        resourceful Full-Stack developer.<br/>
                        Responsible and hard working team player with great independent capabilities,<br/>
                        quick learner, curious and thrilled by new challenges.</p>
                    <Tags skills={
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
                    } />
                </div>
                <div className="next-page">
                    <span className="projects-link">Projects</span>
                    <img className="down-arrow" src="./assets/download.svg" alt="arrow"/>
                </div>
                <Projects />
            </div>
        );
    }
}

export default Homepage;