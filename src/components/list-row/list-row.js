import React from 'react';
import TaskCreator from '../task-creator';
import './list-row.css';

const ListRow = ({ board: { cells, elements } }) => {
  console.log(cells)
  return (
    <div className="flex">
      {
        cells.map((c, idx) => {
          return renderLists(c, idx);
        })
      }
    </div>
  );
}


const renderLists = ({ title, elements }, idx) => {

  return (
    <div key={idx} className="list-block">
      <div className="list-block__inner">
        <div className="tasks">
          <p className="list-title">{ title }</p>
          { renderTasks(elements) }
        </div>
        <TaskCreator />
      </div>

    </div>
  );
};

const renderTasks = (tasks) => {
  return tasks.map((task, idx) => {
    return (
      <div key={idx} className="task">
        <p className="task__item">{ task }</p>
      </div>
    )
  })
};

export default ListRow;
