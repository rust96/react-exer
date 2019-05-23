import React, { Component } from 'react';
import './cell-creator.css';
import CellItem from '../cell-item';
import TaskCreator from '../task-creator';
import { Button } from 'reactstrap';

class CellCreator extends Component {
  state = {
    cellName: '',
    addMode: false
  }

  addNewList = () => {
    const { addListTitle, currentBoardId } = this.props;

    addListTitle(this.state.cellName, currentBoardId);
    this.setState({ cellName: '' });
  }

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
  }

  toggleAddMode = () => {
    this.setState({ addMode: !this.state.addMode })
  }

  render () {
    const { cells, currentBoardId } = this.props;
    const { addMode, cellName } = this.state;

    if (addMode) {
      return (
        <div className="list-block">
          <div className="list-block__inner">
            <input type="text"
              className="input-task task"
              placeholder="Введите название колонки"
              value={cellName}
              onChange={this.onCellChange}
            />

          <div className="flex">
            <button
              className="btn btn_green"
              onClick={() => this.addNewList(cellName, currentBoardId)}>
              Добавить колонку
            </button>

            <button className="btn" onClick={this.toggleAddMode}>+</button>
          </div>
        </div>
      </div>
      );
    };

    return (
      <div className="list-block">
        <div className="list-block__inner">
          <a className="add-list__btn" onClick={this.toggleAddMode}>Добавить еще одну колонку</a>
        </div>
      </div>
    )
  }
}

export default CellCreator;
