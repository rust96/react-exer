import React from 'react';
import TaskCreator from '../task-creator';
import './list-row.css';

const ListRow = ({ board: { cells } }) => {
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

const renderLists = ({ title }, idx) => {
  return (
    <div key={idx} className="list-block">
      <p>{ title }</p>
      <TaskCreator />
    </div>
  );
}

export default ListRow;
