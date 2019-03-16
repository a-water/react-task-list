import React, { Component } from 'react';
import TodoTaskItem from './TodoTaskItem';
import TodoGroupItem from './TodoGroupItem';
import starterData from '../data/data';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingTasks: false,
      tasksToRender: []
    }

    this.handleGroupClicked = this.handleGroupClicked.bind(this);
  }


  renderTodoItems(tasks) {
    return tasks.map(item => {
      return <TodoTaskItem key={item.id} id={item.id} group={item.group} task={item.task} dependencyIds={item.dependencyIds} completedAt={item.completedAt} />
    })
  }

  renderTodoGroups() {
    const taskGroups = this.getTaskGroups();
    let todoGroupItems = [];
    for (const [group, tasks] of taskGroups) {
      todoGroupItems.push(<TodoGroupItem groupName={group} tasks={tasks} onClick={this.handleGroupClicked} key={group}/>);
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

  handleGroupClicked(tasks) {
    this.setState({
      isShowingTasks: true,
      tasksToRender: tasks
    })
  }

  render() {
    return(
      <div className="todo-list">
        { this.state.isShowingTasks ? this.renderTodoItems(this.state.tasksToRender) : this.renderTodoGroups() }
      </div>
    )
  }
}

export default TodoList;