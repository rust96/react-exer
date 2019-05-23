import React, { Component } from 'react';
import './cell-creator.css';
import CellItem from '../cell-item';
import TaskCreator from '../task-creator';
import { Button } from 'reactstrap';

class CellCreator extends Component {
  state = {
    cellName: '',
    addMode: true
  }

  addNewList = () => {
    const { addListTitle, currentBoardId } = this.props;

    addListTitle(this.state.cellName, currentBoardId);
    this.setState({ cellName: '' });
  }

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
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
              placeholder="Введите название карточки"
              value={cellName}
              onChange={this.onCellChange}
            />

          <div className="flex">
            <button
              className="btn btn_green"
              onClick={() => this.addNewList(cellName, currentBoardId)}>
              Добавить карточку
            </button>
            <button className="btn">+</button>
          </div>
        </div>
      </div>
      );
    };

    return (
      <div className="list-block">
        <p className="add-list__btn">Добавить еще одну колонку</p>
      </div>
    )
  }
}

export default CellCreator;
