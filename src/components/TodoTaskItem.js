import React, { Component } from 'react';

class TodoTaskItem extends Component {
  render() {
    return(
      <div className="todo-task-item">
        <span>{ this.props.task }</span>
      </div>
    )
  }
}

export default TodoTaskItem;