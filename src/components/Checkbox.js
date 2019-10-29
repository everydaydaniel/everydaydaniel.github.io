import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
  }

  changeCheckState = () => {
    // we have a callback after set state runs
    // need to do this because js is async
    this.setState({
      checked: !this.state.checked
    }, () => {

    this.props.updateState(
      this.props.stateKey,
      this.props.name,
      this.state.checked
    )}
  );


  }

  render() {
    if (this.state.checked){
      return (
          <img className='checkbox' id={this.props.name} alt='checked box' value='true' onClick={this.changeCheckState} src='images/font-check.svg' />
        );
    }
    return (
      <img className='checkbox' id={this.props.name} alt='unchecked box' value='false' onClick={this.changeCheckState} src='images/font-uncheck.svg' />
    );
  }
}

export default Checkbox;
