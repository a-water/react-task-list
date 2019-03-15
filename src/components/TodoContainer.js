import React, { Component } from 'react';
import InputBar from './InputBar';

class TodoContainer extends Component {
  render() {
    return(
      <div className="container">
        <InputBar />
      </div>
    )
  }
}

export default TodoContainer;