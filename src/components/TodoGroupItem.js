import React, { Component } from 'react';

class TodoGroupItem extends Component {

  renderCompletedString(tasks) {
    let completed = 0;
    tasks.forEach(task => {
      if(task.completedAt) {
        completed++;
      }
    });

    return `${completed} of ${tasks.length} completed`;
  }

  render() {
    return(
      <div className="todo-group-item"  onClick={() => this.props.onClick(this.props.tasks) }>
        <img src={ require('../assets/Group.svg') } />
        <div className="labels">
          <div className="group-name">{ this.props.groupName }</div>
          <div>{ this.renderCompletedString(this.props.tasks) }</div>
        </div>
      </div>
    )
  }
}

export default TodoGroupItem;