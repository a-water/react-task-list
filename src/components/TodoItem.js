import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return(
      <div className="todo-item">
        <span>{ this.props.task }</span>
      </div>
    )
  }
}

export default TodoItem;