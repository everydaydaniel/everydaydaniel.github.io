import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import Menu from './Menu';
import Contact from './Contact';
import Quote from './Quote';
import '../css/components.css'


class App extends React.Component  {
  constructor(props) {
    super(props);
    // we want to pass in the state and update it based on clicking
    this.state = {
      menu: false
     }
  }

  // use this as a callbak to display the menu
  // this function is what turns the menu off and on
  changeMenuState = (e) => {
    if (this.state.menu){
      this.setState({
        menu: false
      })
    } else {
      this.setState({
        menu: true
      })
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <BrowserRouter>
          <Menu menuState={this.state} showMenu={this.changeMenuState} />
          <Header showMenu={this.changeMenuState} />
          <Route path='/' exact component={HomePage} />
          <Route path='/quote' exact component={Quote} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/about' exact component={About} />
          <Route component={Footer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
