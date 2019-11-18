import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 1
  };
  plus = () => {
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1}));
  };

  render() {
    return (
        <div>
          <h1>This number is : {this.state.count}</h1>
          <button onClick={this.plus}>plus</button>
          <button onClick={this.minus}>minus</button>
        </div>
    )
  }
}

export default App;
