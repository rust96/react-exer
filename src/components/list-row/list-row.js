import React from 'react';
import TaskCreator from '../task-creator';
import './list-row.scss';

const ListRow = ({ board: { cells, elements, id }, addTask }) => {
  return (
    <div className="flex">
      { cells.map((c, idx) => renderLists(c, idx, id, addTask)) }
    </div>
  );
}


const renderLists = ({ title, elements }, idx, boardId, fn) => {

  return (
    <div key={idx} className="list-block">
      <div className="list-block__inner">
        <div className="tasks">
          <p className="list-title">{ title }</p>
          { renderTasks(elements) }
        </div>
        <TaskCreator
          boardId={boardId}
          listIdx={idx}
          addTask={fn} />
      </div>

    </div>
  );
};

const renderTasks = (tasks) => {
  const dragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    console.log(e.currentTarget)
    e.dataTransfer.setData('text/html', e.currentTarget);
  }

  const dragOver = (e, idx) => {
    console.log(e.currentTarget);
    console.log(idx)
  }
  return tasks.map((task, idx) => {
    return (
      <div key={idx}
        className="task"
        draggable="true"
        onDragStart={dragStart}
        onDragEnter={(e) => dragOver(e, idx)}>
        <p className="task__item">{ task }</p>
      </div>
    )
  })
};

export default ListRow;
