import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions';

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

  render () {
    const { createBoard } = this.props;
    const { boardOpen, boardName } = this.state;

    if (boardOpen) {
      return (
        <div className="board-creator">
          <p className="board-creator__create">Создаем доску...</p>

          <input type="text" className="board-creator__input"
            value={boardName}
            onChange={this.onNameChange}
          />

          <div>
            <button className="button button_cancel" onClick={this.toggleCreating}>Отменить</button>
            <button className="button button_save" onClick={() => createBoard(boardName)}>Сохранить</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createBoard: (boardName) => {
      dispatch(createBoard(boardName));
    }
  }
}

export default connect(null, mapDispatchToProps)(BoardCreator);
