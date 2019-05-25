import React from 'react';
import { connect } from 'react-redux';
import PageNotFound from '../page-not-found';
import CellCreator from '../../containers/cell-creator';
import ListRow from '../../containers/list-row';
import { createList, createTask, dragTask } from '../../actions';

const BoardPage = ({ match: { params: { id } },
   createTask, dragTask, createList, boards }) => {

    const currentBoard = boards.find((b) => +id === b.id );

    if (!currentBoard) {
      return <PageNotFound />
    }

    return (
      <div className="wrapper">
        <div className="flex">
          <ListRow
            board={currentBoard}
            createTask={createTask}
            dragTask={dragTask}
            boardId={id}
          />

          <CellCreator
            currentBoardId={id}
            createList={createList}
            cells={currentBoard.cells}
          />
        </div>
      </div>
    )
  }

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (title, boardId) => {
      dispatch(createList(title, boardId))
    },
    createTask: (task, boardId, listIdx) => {
      dispatch(createTask(task, boardId, listIdx))
    },
    dragTask: (rmList, rmTask, addList, addTask, boardId) => {
      dispatch(dragTask(rmList, rmTask, addList, addTask, boardId))
    }
  }
}

export default connect(({boards}) => ({ boards }),mapDispatchToProps)(BoardPage);
