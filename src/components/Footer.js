import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

// made footer a route in app.js to pass in path information
const changeFooterDisplay = (pathname) =>  {
  if (pathname === '/quote') {
    return 'no-show';
  }
  return '';
}

const Footer = (props) => {
  return (
    <footer className={`${changeFooterDisplay(props.location.pathname)} container footer-wrap`}>
      <div className='row footer-content'>
        <div className='one-third column left footer-col'>
          <Link to='/contact'>
            <img className='footer-img' alt='contact us' src='images/goody-mail.svg' />
          </Link>
        </div>
        <div className='two-thirds column footer-col right'>
          <Link to='/quote'>
            <img className='footer-img footer-item float-right' alt='get a quote' src='images/goody-arrow.svg' />
            <h1 className='goody-footer-text footer-item float-right'>Get a Quote &nbsp;</h1>
          </Link>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
