import React, { Component } from 'react';

class TodoHeader extends Component {
  render() {
    return(
      <div className="todo-header">
        <span>{ this.props.taskListName ? this.props.taskListName : "Things to do:" }</span>
        <span>{ this.props.taskListName ? 'All groups' : ''}</span>
      </div>
    )
  }
}

export default TodoHeader;