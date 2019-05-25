import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageNotFound from '../page-not-found';
import Header from '../header';
import CellCreator from '../cell-creator';
import ListRow from '../list-row';
import { addListTitle, addTask, dragTask } from '../../actions';

class BoardPage extends Component {

  addListTitle = (title, boardId) => {
    this.props.addListTitle(title, boardId)
  }

  addTask = (task, boardId) => {
    this.props.addTask(task, boardId)
  }

  render () {
    const id = this.props.match.params.id;

    const currentBoard = this.props.boards.find((b) => b.id == id);

    if (!currentBoard) {
      return <PageNotFound />
    }

    return (
      <div className="wrapper">
        <div className="flex">
          <ListRow
            board={currentBoard}
            addTask={this.props.addTask}
            dragTask={this.props.dragTask}
            boardId={id}
          />

          <CellCreator
            currentBoardId={id}
            addListTitle={this.props.addListTitle}
            cells={currentBoard.cells}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ boards }) => {
  return {
    boards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListTitle: (title, boardId) => {
      dispatch(addListTitle(title, boardId))
    },
    addTask: (task, boardId, listIdx) => {
      dispatch(addTask(task, boardId, listIdx))
    },
    dragTask: (rmList, rmTask, addList, addTask, boardId) => {
      dispatch(dragTask(rmList, rmTask, addList, addTask, boardId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPage);
