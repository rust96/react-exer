import React, { Component } from 'react';

class TaskCreator extends Component {
  render () {
    return (
      <div className="task-creator">
        <input
          type="text"
          placeholder="создать новое задание"
          className="input-creator"
        />
      </div>
    )
  }
}

export default TaskCreator;
