import React, {Component} from 'react';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <span className="initials-square"><span className="initials">RZ</span></span>
                <button className='download-cv'>Download my CV <img src="./assets/down-arrow.svg" alt="download-cv" className="download-image"/></button>
            </div>
        );
    }
}

export default Header;