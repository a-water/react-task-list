import React, { Component } from 'react';
import starterData from '../data/data';

class TodoTaskItem extends Component {

  renderItemImage(dependencyIds, completedAt) {
    if(completedAt) {
      return <img src={ require('../assets/Completed.svg') } />
    } else if(dependencyIds.length > 0) {
      let isLocked = false;
      dependencyIds.forEach(dependency => {
        if(!dependency.completedAt) {
          isLocked = true;
        }
      });
      if(isLocked) {
        return <img src={ require('../assets/Locked.svg') } />
      }
    }

    return <img src={ require('../assets/Incomplete.svg') } />
  }

  render() {
    return(
      <div className="todo-task-item">
        { this.renderItemImage(this.props.dependencyIds, this.props.completedAt) }
        <span>{ this.props.task }</span>
      </div>
    )
  }
}

export default TodoTaskItem;