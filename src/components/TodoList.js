import React, { Component } from 'react';
import TodoItem from './TodoItem';
import starterData from '../data/data';

class TodoList extends Component {
  renderTodoItems() {
    return starterData.map(item => {
      return <TodoItem key={item.id} id={item.id} group={item.group} task={item.task} dependencyIds={item.dependencyIds} completedAt={item.completedAt} />
    })
  }

  render() {
    return(
      <div className="todo-list">
        { this.renderTodoItems() }
      </div>
    )
  }
}

export default TodoList;