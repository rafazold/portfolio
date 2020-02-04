import React, {Component} from 'react';
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <span className="header-left">
                    <span className="initials-square">
                        <span className="initials">RZ</span>
                    </span>
                    {this.props.backHome ? <span className="back-home"><img className="back-home-arrow" src="./assets/back-arrow.svg" alt="back-arrow"/>
                    Back Home</span> : null}
                </span>
                <a className='download-cv' href="./assets/rafaelZoldanResume.pdf" target="_blank" download>Download my CV<img src="./assets/down-arrow.svg" alt="download-cv" className="download-image"/></a>
            </div>
        );
    }
}

export default Header;