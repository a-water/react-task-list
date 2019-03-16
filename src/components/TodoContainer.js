import React, { Component } from 'react';
import InputBar from './InputBar';
import TodoHeader from './TotoHeader';
import TodoList from './TodoList';

class TodoContainer extends Component {
  render() {
    return(
      <div className="container">
        <InputBar />
        <TodoHeader />
        <TodoList />
      </div>
    )
  }
}

export default TodoContainer;