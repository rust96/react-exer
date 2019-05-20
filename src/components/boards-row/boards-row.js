import React from 'react';
import BoardItem from '../board-item';

import './boards-row.css'

const BoardsRow = ({ boards }) => {

  if (boards.length === 0) {
    return (
      <h1>No desks</h1>
    )
  }

  const renderBoards = boards.map(({ id, title }, idx) => {
    console.log(id)
    return (
      <BoardItem
        key={idx}
        id={id}
        title={title}
     />
    );
  });

  return (
    <ul className="boards__list">
      { renderBoards }
    </ul>
  )
}

export default BoardsRow;
