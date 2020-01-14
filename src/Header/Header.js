import React, {Component} from 'react';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <span className="initials-square"><span className="initials">RZ</span></span>
                <a className='download-cv' href="./assets/rafaelZoldanResume.pdf" target="_blank" download>Download my CV<img src="./assets/down-arrow.svg" alt="download-cv" className="download-image"/></a>
            </div>
        );
    }
}

export default Header;