import React, { Component } from 'react';
import './task-creator.scss';

class TaskCreator extends Component {
  state = {
    taskName: '',
    addTaskActive: false
  }

  toggleAddTask = () => {
    this.setState({ addTaskActive: !this.state.addTaskActive })
  }

  onTaskChange = (e) => {
    this.setState({ taskName: e.target.value })
  }

  createTask = (taskName, boardId, listIdx) => {
    this.props.createTask(taskName, boardId, listIdx);
    this.setState({ taskName: '' });
  }

  render () {
    const { boardId, listIdx } = this.props;
    const { addTaskActive, taskName } = this.state;

    if (addTaskActive) {
      return (
        <div className="task-creator">
          <input
            type="text"
            placeholder="Введите название карточки"
            className="input-creator"
            value={taskName}
            onChange={this.onTaskChange}
          />

          <div className="flex">
            <button
              className="button button_green"
              onClick={() => this.createTask(taskName, boardId, listIdx)}>
              Добавить задание
            </button>
            <button
              className="button button_close"
              onClick={this.toggleAddTask}></button>
          </div>
        </div>
      )
    }

    return (
      <button className="button button_add"
      onClick={this.toggleAddTask}>Добавить еще одну карточку</button>
    )
  }
}

export default TaskCreator;
