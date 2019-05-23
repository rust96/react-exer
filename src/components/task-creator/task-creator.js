import React, { Component } from 'react';
import './task-creator.css';

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
    this.props.addTask(taskName, boardId, listIdx);
    this.setState({ taskName: '' });
  }

  render () {
    const { boardId, addTask, listIdx } = this.props;
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
              className="btn btn_green"
              onClick={() => this.createTask(taskName, boardId, listIdx)}>
              Добавить задание
            </button>
            <button onClick={this.toggleAddTask}>x</button>
          </div>
        </div>
      )
    }

    return (
      <p className="btn add-list__btn"
      onClick={this.toggleAddTask}>Добавить еще одну карточку</p>
    )
  }
}

export default TaskCreator;
