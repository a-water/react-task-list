import React, { Component } from 'react';
import TodoTaskItem from './TodoTaskItem';
import TodoGroupItem from './TodoGroupItem';
import starterData from '../data/data';

class TodoList extends Component {
  renderTodoItems() {
    return starterData.map(item => {
      return <TodoTaskItem key={item.id} id={item.id} group={item.group} task={item.task} dependencyIds={item.dependencyIds} completedAt={item.completedAt} />
    })
  }

  renderTodoGroups() {
    const taskGroups = this.getTaskGroups();
    let todoGroupItems = [];
    for (const [group, tasks] of taskGroups) {
      todoGroupItems.push(<TodoGroupItem groupName={group} tasks={tasks} key={group}/>);
    }
    return todoGroupItems;
  }

  getTaskGroups() {
    const groupMap = new Map();
    starterData.forEach(item => {
      const key = item.group;
      if(!groupMap.has(key)) {
        groupMap.set(key, [item]);
      } else {
        groupMap.get(key).push(item);
      }
    })
    
    return groupMap;
  }

  render() {
    return(
      <div className="todo-list">
        { this.renderTodoGroups() }
      </div>
    )
  }
}

export default TodoList;