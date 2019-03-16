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
    console.log('props', this.props);
    
    return(
      <div className="todo-group-item">
        <img src={ require('../assets/Group.svg') } />
        <div className="labels">
          <div>{ this.props.groupName }</div>
          <div>{ this.renderCompletedString(this.props.tasks) }</div>
        </div>
      </div>
    )
  }
}

export default TodoGroupItem;