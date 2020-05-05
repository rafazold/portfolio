import React, {Component} from 'react';
import './Header.scss'
import {AiOutlineDownload} from 'react-icons/ai';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <span className="header-left">
                    <span className="initials-square">
                        <span className="initials">RZ</span>
                    </span>
                    {this.props.backHome ? <span className="back-home">
                        {/*<img className="back-home-arrow" src="./assets/back-arrow.svg" alt="back-arrow"/>*/}

                    Back Home</span> : null}
                </span>
                <a className='download-cv' href="./assets/Rafael Zoldan - Resume.pdf" target="_blank" download>Download my CV
                    <AiOutlineDownload size={'1.6em'}/>
                </a>
            </div>
        );
    }
}

export default Header;