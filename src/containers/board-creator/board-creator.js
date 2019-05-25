import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions';

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

  saveBoard = () => {
    this.props.createBoard(this.state.boardName);
    this.setState({ boardName: '' })
  }

  render () {
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
            <button className="button button_save" onClick={() => this.saveBoard()}>Сохранить</button>
          </div>
        </div>
      )
    }

    return (
      <div className="board-creator">
        <button className="button button_board-create" onClick={this.toggleCreating}>Создать доску</button>
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
