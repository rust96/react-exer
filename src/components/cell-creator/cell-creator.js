import React, { Component } from 'react';
import './cell-creator.css';
import CellItem from '../cell-item';
import TaskCreator from '../task-creator';
import { Button } from 'reactstrap';

class CellCreator extends Component {
  state = {
    cellName: ''
  }

  onCellChange = (e) => {
    this.setState({ cellName: e.target.value })
  }

  render () {
    const { cells } = this.props;

    // const renderCells = cells.elements.map((c, idx) => {
    //   return (
    //     <div className="block" key={idx}>
    //       <TaskCreator />
    //       <CellItem cell={c} />
    //     </div>
    //   )
    // });

    const renderCells = cells.map((c, idx) => {
      return (
        <p key={idx}>{ c.title }</p>
      )
    });


    if (cells[0]) {
      return (
        <div className="flex">
          <p>{ cells.title }</p>
          { renderCells }
          <input type="text"
            value={this.state.cellName}
            onChange={this.onCellChange}
          />
        <Button onClick={() => this.props.addListTitle(this.state.cellName, this.props.currentBoardId)}>Добавить список</Button>
        </div>
      )
    }

    return (
      <React.Fragment>
        <input type="text"
          value={this.state.cellName}
          onChange={this.onCellChange}
        />
      <Button onClick={() => this.props.addListTitle(this.state.cellName, this.props.currentBoardId)}>Добавить список</Button>
      </React.Fragment>
    )
  }
}

export default CellCreator;
