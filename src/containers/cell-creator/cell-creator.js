import React, { Component } from 'react';
import './cell-creator.css';

class CellCreator extends Component {
  state = {
    cellName: '',
    addMode: false
  }

  addNewList = () => {
    const { createList, currentBoardId } = this.props;

    createList(this.state.cellName, currentBoardId);
    this.setState({ cellName: '' });
  }

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
  }

  toggleAddMode = () => {
    this.setState({ addMode: !this.state.addMode })
  }

  render () {
    const { currentBoardId } = this.props;
    const { addMode, cellName } = this.state;

    if (addMode) {
      return (
        <div className="list-block cell-creator">
          <div className="list-block__inner">
          <div className="task-creator">
            <input type="text"
              className="input-task input-creator"
              placeholder="Введите название колонки"
              value={cellName}
              onChange={this.onCellChange}
            />

            <div className="flex">
              <button
                className="button button_green"
                onClick={() => this.addNewList(cellName, currentBoardId)}>
                Добавить колонку
              </button>

              <button className="button button_close" onClick={this.toggleAddMode}></button>
            </div>
          </div>

        </div>
      </div>
      );
    };

    return (
      <div className="list-block cell-creator">
        <div className="list-block__inner">
          <button className="button button_add" onClick={this.toggleAddMode}>Добавить еще одну колонку</button>
        </div>
      </div>
    )
  }
}

export default CellCreator;
