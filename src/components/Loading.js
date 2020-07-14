import React from 'react';

class Loading extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {dotCount: 0, dots: ""};
  }

  componentDidMount() {
      this.myInterval = setInterval(() => {
          let { dotCount, dots } = this.state
          dotCount = (dotCount + 1) % 5;
          let newDots = ""
          for (var i = 0; i < dotCount; i++) {
            newDots += ".";
          }
          dots = newDots;
          this.setState({dotCount: dotCount, dots: dots});
      }, 1000)
  }

  componentWillUnmount() {
      clearInterval(this.myInterval)
  }



  render() {
    return (
      <div className="container">
        <h1>
          Sending email{this.state.dots}
        </h1>
      </div>
    );
  }
}

export default Loading;
