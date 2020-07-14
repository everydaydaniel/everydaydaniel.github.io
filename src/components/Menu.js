import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  getMenuState = () => {
    if (this.props.menuState.menu){
      return '';
    }
    return 'no-show';
  }

  render(){
    return (
    <div className={`${this.getMenuState()} menu-overlay`}>
      <div className='container header-wrap'>
        <div className='row'>
          <div className='11 column right menu-col'>
            <img onClick={this.props.showMenu} id='close-menu' className='header-item' src='images/goody-close.svg' alt='close menu' />
          </div>
        </div>
      </div>
      <div className='row menu-option'>
        <div className='row menu-option'>
          <Link onClick={this.props.showMenu} to='/'>
            <h2>Home</h2>
          </Link>
        </div>
        <Link onClick={this.props.showMenu} to='/quote'>
          <h2>Quote</h2>
        </Link>
      </div>
      <div className='container menu-options-wrapper'>
        <div className='row menu-option'>
          <Link onClick={this.props.showMenu} to='/contact'>
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </div>
    );
  }
}

export default Menu;
