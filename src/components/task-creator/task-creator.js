import React, { Component } from 'react';

class TaskCreator extends Component {
  render () {
    return (
      <div class="task-creator">
        <input
          type="text"
          placeholder="создать новое задание"
          class="input-creator"
        />
      </div>
    )
  }
}

export default TaskCreator;
