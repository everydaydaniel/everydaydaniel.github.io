import React from 'react';
import '../css/form.css';
import Checkbox from './Checkbox';
import sendMail from '../apis/sendEmail';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        emailError:''
      },
      name: '',
      email: '',
      body: '',
      services: {},
      objects: {},
      colors: {},
      quantity: {},
      }
  }
  submitForm = e => {
    let errors = false;
    e.preventDefault();
    // checks if its a valid email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(this.state.email)) {
      // puts an error span
      let returnObj = this.state.errors;
      returnObj.emailError = <span className='error-message'>&nbsp; *please enter a valid email*</span>;
      this.setState(returnObj);
      errors = true;
    }

    if (!errors){
      this.props.sentMail()
      sendMail(this.state, this.props.mailSuccess, this.props.mailError);
    }
  }

  handleChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  setCheckboxState = (stateKey, key, value) => {
    // bug adds key value to state. BUT also creates obj
    const returnObj = this.state[stateKey];
    returnObj[key] = value;
    console.log('return obj setCheckboxState:', returnObj);
    this.setState(returnObj);
  }


  render() {
    return (
      <div>
        <div className='container'>
          <form>
            <div className='row'>
              <div className='one-half column form-inputs text-inputs'>
                <h2>Get a Quote</h2>
                <div className='text-input'>
                  <label className='input-labels'>
                    Name
                  <br />
                  <input type='text' name='name' value={this.state.name} onChange={(event) => this.handleChange(event)} autoComplete='false' />
                  </label>
                </div>
                <div className='text-input'>
                  <label className='input-labels'>
                    Email
                  <br />
                  <input type='email' name='email' value={this.state.email} onChange={(event) => this.handleChange(event)} autoComplete='false' />
                  </label>
                </div>
                {this.state.errors.emailError}
                <div className='text-input'>
                  <label className='input-labels'>
                    Description
                  <br />
                  <input type='text' name='body' value={this.state.body} onChange={(event) => this.handleChange(event)} autoComplete='false' />
                  </label>
                </div>
              </div>
              <div className='one-half column form-inputs checkbox-inputs'>
                <div className='full-width'>
                  <h3>Services</h3>
                  <div className='checkbox-wrap'>
                    <Checkbox name='print' stateKey='services' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Print</span>
                    <Checkbox name='design' stateKey='services' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Design</span>
                    <Checkbox name='fun' stateKey='services' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Fun</span>
                  </div>
                </div>
                <div className='full-width'>
                  <h3>Objects</h3>
                  <div className='checkbox-wrap'>
                    <Checkbox name='paper' stateKey='objects' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Paper</span>
                    <Checkbox name='totes' stateKey='objects' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Totes</span>
                    <Checkbox name='shirts' stateKey='objects' updateState={this.setCheckboxState} /> <span className='checkbox-text'>Shirts</span>
                  </div>
                </div>
                <div className='full-width'>
                  <h3>Colors</h3>
                  <div className='checkbox-wrap'>
                    <Checkbox name='one' stateKey='colors' updateState={this.setCheckboxState} /> <span className='checkbox-text'>1</span>
                    <Checkbox name='two' stateKey='colors' updateState={this.setCheckboxState} /> <span className='checkbox-text'>2</span>
                    <Checkbox name='three' stateKey='colors' updateState={this.setCheckboxState} /> <span className='checkbox-text'>3</span>
                    <Checkbox name='four' stateKey='colors' updateState={this.setCheckboxState} /> <span className='checkbox-text'>4</span>
                  </div>
                </div>
                <div className='full-width'>
                  <h3>Quantity</h3>
                  <div className='checkbox-wrap'>
                    <Checkbox name='small-order' stateKey='quantity' updateState={this.setCheckboxState}/> <span className='checkbox-text'>1-50</span>
                    <Checkbox name='medium-order' stateKey='quantity' updateState={this.setCheckboxState}/> <span className='checkbox-text'>51-100</span>
                    <Checkbox name='large-order' stateKey='quantity' updateState={this.setCheckboxState}/> <span className='checkbox-text'>More</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='row right submit-wrap'>
              <button onClick={this.submitForm}>
                <img className='footer-img footer-item float-right' alt='get a quote' src='images/goody-arrow.svg' />
                <h1 className='goody-footer-text footer-item float-right'>Submit</h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}



export default Form;
