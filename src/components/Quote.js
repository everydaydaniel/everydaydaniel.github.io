import React from 'react';
import Form from './Form';
import Success from './Success';
import Loading from './Loading';
import EmailError from './EmailError';
import '../css/form.css';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      done: false,
      success: false,
      error: false
    }
  }

  // state will be passed down up until send mail because
  // promiseses are async and we have to change state
  // in the callbacks.
  sentMail = () => {
    this.setState({sent: true});
  }

  mailSuccess = () => {
    this.setState({success: true});
    this.mailDone();
  }

  mailError = () => {
    this.setState({error: true});
    this.mailDone();
  }

  mailDone = () => {
    this.setState({done: true});
  }

  render() {
    if (!this.state.sent) {
      return (
        <Form
          sentMail={this.sentMail}
          mailSuccess={this.mailSuccess}
          mailError={this.mailError}
          />
      );
    }
    if (this.state.sent && !this.state.done) {
      return (<Loading />);
    }
    if (this.state.sent && this.state.done) {
      if (this.state.success){
        return (<Success />);
      } else {
        return (<EmailError />);
      }
    }


  }
}

export default Quote;
