import React from 'react';
import './Homepage.scss'
import Tags from "../Tags/Tags";
import Projects from "./Projects/Projects";
import CurvedArrow from "./CurvedArrow/CurvedArrow";
import { HashLink } from 'react-router-hash-link';

const Homepage = () => {

    return (
        <div className="Homepage">
            <div className="hp-background">
                <div className="hp-background-image-wrapper">
                    <img className="hp-background-image"
                         src="/assets/530.png" alt="background"/>
                </div>
                <img className="hp-background-wave" src="/assets/wave-hp2.svg" alt="wave"/>
                <div className="hp-background-endless"></div>
            </div>
            <CurvedArrow />
            <div className="profile-picture-wrapper">
                <img className="profile-picture" src="./assets/rafa192.png" alt="avatar"/>
            </div>
            <div className="homepage-middle-text">
                <h1 className="homepage-title">Hello!</h1>
                <p className="homepage-summary">My name is Rafael Zoldan, I’m a passionate, motivated and
                    resourceful Full-Stack developer.<br/>
                    Responsible and hard working team player with great independent capabilities,<br className="text-break"/>
                    quick learner, curious and thrilled by new challenges.</p>
                <Tags skills={
                    [
                        'HTML 5',
                        'CSS 3',
                        'Javascript',
                        'Sass',
                        'Node.js',
                        'Webpack',
                        'ES6',
                        'React',
                        'MongoDB',
                        
                        'flutter',
                        'Git'
                    ]
                } />
            </div>
            <div className="next-page">
                <HashLink
                    className="projects-link"
                    to="#projects"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                >Projects<img className="down-arrow" src="./assets/download.svg" alt="arrow"/></HashLink>
            </div>
            <Projects />
            <section className="homepage-footer">
                <span className="footer-text footer-top-text">Thank you!</span>
                <span className="footer-text footer-bottom-text">Let's talk...</span>
                <span className="footer-contact">
                        <a className="phone" href="tel:+972542256204"><img className="phone-img" src="/assets/phone.svg" alt="phone"/></a>
                        <a className="mail" href="mailto:zoldan.rafael@gmail.com"><img className="mail-img" src="/assets/mail.svg" alt="mail"/></a>
                    </span>
            </section>
        </div>
    )
}

export default Homepage;