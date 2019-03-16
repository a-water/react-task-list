import React, { Component } from 'react';

class InputBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskTitle: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  handleOnSubmit() {

  }

  handleOnInputChange(e) {
    this.setState({
      taskTitle: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form className="input-form" onSubmit={ this.handleOnSubmit }>
          <input type="text" placeholder="Enter task..." value={ this.state.taskTitle } onChange={ this.handleOnInputChange }></input>
          <input type="submit" value="Add"></input>
        </form>
      </div>
    )
  }
}

export default InputBar;