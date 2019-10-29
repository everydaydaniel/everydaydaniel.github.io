import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className='container header-wrap'>
      <div className='row'>
        <div className='two-thirds column header-col'>
          <Link to='/'>
            <img id='goody-boi' className='left header-item' src='images/goody-boi.svg' alt='goody boy logo' />
            <h1 className='goody-header-text header-item' >&nbsp;&nbsp;Goody Bag</h1>
          </Link>
        </div>
        <div className='one-third column right header-col'>
          <img onClick={props.showMenu} id='burger-menu' className='header-item' src='images/goody-menu.svg' alt='expand menu' />
        </div>
      </div>
    </div>
  );
};

export default Header;
