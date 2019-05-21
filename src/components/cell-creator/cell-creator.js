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

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
  }

  render () {

    const { cells } = this.props;
    const { addMode } = this.state;

    if (addMode) {
      return (
        <div className="list-block">
          <div className="list-block__inner">
            <input type="text"
              className="input-task task"
              placeholder="Введите название карточки"
              value={this.state.cellName}
              onChange={this.onCellChange}
              onClick={() => this.props.addListTitle(this.state.cellName, this.props.currentBoardId)}
            />

          <div className="flex">
            <button className="btn btn_green">Добавить карточку</button>
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
