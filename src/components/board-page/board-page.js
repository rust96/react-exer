import React from 'react';
import { connect } from 'react-redux';
import PageNotFound from '../page-not-found';
import CellCreator from '../cell-creator';
import ListRow from '../list-row';
import { createList, addTask, dragTask } from '../../actions';

const BoardPage = ({ match: { params: { id } },
   addTask, dragTask, createList, boards }) => {

    const currentBoard = boards.find((b) => +id === b.id );

    if (!currentBoard) {
      return <PageNotFound />
    }

    return (
      <div className="wrapper">
        <div className="flex">
          <ListRow
            board={currentBoard}
            addTask={addTask}
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
    addTask: (task, boardId, listIdx) => {
      dispatch(addTask(task, boardId, listIdx))
    },
    dragTask: (rmList, rmTask, addList, addTask, boardId) => {
      dispatch(dragTask(rmList, rmTask, addList, addTask, boardId))
    }
  }
}

export default connect(({boards}) => ({ boards }),mapDispatchToProps)(BoardPage);
