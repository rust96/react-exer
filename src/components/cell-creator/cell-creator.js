import React, { Component } from 'react';
import './cell-creator.css';
import CellItem from '../cell-item';
import TaskCreator from '../task-creator';

class CellCreator extends Component {
  state = {
    cellName: ''
  }

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
  }

  render () {
    const { cells } = this.props;

    const renderCells = cells.map((c, idx) => {
      return (
        <div className="block">
          <TaskCreator />
          <CellItem key={idx} cell={c} />
        </div>
      )
    });

    if (cells) {
      return (
        <div className="flex">
          { renderCells }
          <input type="text"
            value={this.state.cellName}
            onChange={this.onCellChange}
          />
          <button onClick={() => this.props.addListTitle(this.state.cellName, this.props.currentBoardId)}>Добавить список</button>
        </div>
      )
    }

    return (
      <React.Fragment>
        <input type="text"
          value={this.state.cellName}
          onChange={this.onCellChange}
        />
        <button onClick={() => this.props.addListTitle(this.state.cellName, this.props.currentBoardId)}>Добавить список</button>
      </React.Fragment>
    )
  }
}

export default CellCreator;
