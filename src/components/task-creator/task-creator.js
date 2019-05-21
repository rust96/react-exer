import React, { Component } from 'react';
import './task-creator.css';

class TaskCreator extends Component {
  render () {
    const t = false;
    if (t) {
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

    return (
      <p className="btn add-list__btn">Добавить еще одну карточку</p>
    )

  }
}

export default TaskCreator;
