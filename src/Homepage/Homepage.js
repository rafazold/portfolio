import React, {Component} from 'react';
import './Homepage.scss'
import Tags from "../Tags/Tags";
import Projects from "./Projects/Projects";
import CurvedArrow from "./CurvedArrow/CurvedArrow";
import { HashLink } from 'react-router-hash-link';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <div className="hp-background">
                    <img className="hp-background-image" src="/assets/530.png" alt="background"/>
                    <img className="hp-background-wave" src="/assets/wave-hp.svg" alt="wave"/>
                </div>
                <CurvedArrow />
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
                    <HashLink
                        className="projects-link"
                        to="#projects"
                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                    >Projects</HashLink>
                    <img className="down-arrow" src="./assets/download.svg" alt="arrow"/>
                </div>
                <Projects />
                <section className="homepage-footer">
                    <span className="footer-text footer-top-text">Thank you!</span><br/>
                    <span className="footer-text footer-bottom-text">Let's talk...</span><br/>
                    <span className="footer-contact">
                        <a className="phone" href="tel:+972542256204"><img src="/assets/phone.svg" alt="phone"/></a>
                        <a className="mail" href="mailto:zoldan.rafael@gmail.com"><img src="/assets/mail.svg" alt="mail"/></a>
                    </span>
                </section>
            </div>
        );
    }
}

export default Homepage;