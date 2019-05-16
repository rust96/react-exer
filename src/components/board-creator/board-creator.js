import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onBoardCreate } from '../../actions';

import './board-creator.css';


class BoardCreator extends Component {

  state = {
    boardOpen: false,
    boardName: ""
  }

  toggleCreating = () => {
    this.setState({ boardOpen: !this.state.boardOpen })
  }

  onNameChange = (e) => {
    this.setState({ boardName: e.target.value })
  }

  createBoard = () => {
    this.props.onBoardCreate(this.state.boardName);
  }

  render () {
    if (this.state.boardOpen) {
      return (
        <div className="board-creator">
          <p className="board-creator__create">Создаем доску...</p>

          <input type="text" className="board-creator__input"
            value={this.state.boardName}
            onChange={this.onNameChange}
          />

          <div>
            <button className="button button_cancel" onClick={this.toggleCreating}>Отменить</button>
            <button className="button button_save" onClick={this.createBoard}>Сохранить</button>
          </div>
        </div>
      )
    }

    return (
      <div className="board-creator">
        <button className="button button_non-active" onClick={this.toggleCreating}>Создать доску</button>
      </div>
    )
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoardCreate: (boardName) => {
      dispatch(onBoardCreate(boardName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreator);
