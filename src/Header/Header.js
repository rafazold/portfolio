import React from 'react';
import './Header.scss';
import { AiOutlineDownload } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  return (
    <div className="Header">
      <span className="header-left">
        <Link to={'/'}>
          <span className="initials-square">
            <span className="initials">RZ</span>
          </span>
        </Link>
        {location.pathname.length > 1 ? (
          <Link to={'/'}>
            <span className="back-home">
              <img
                className="back-home-arrow"
                src={`${process.env.PUBLIC_URL}/assets/back-arrow.svg`}
                alt="back-arrow"
              />
              Back Home
            </span>
          </Link>
        ) : null}
      </span>
      <a
        className="download-cv"
        href="./assets/Rafael Zoldan - Full Stack.pdf"
        target="_blank"
        download
      >
        Download my CV
        <AiOutlineDownload size={'1.6em'} />
      </a>
    </div>
  );
};

export default Header;
