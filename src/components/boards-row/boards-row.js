import React from 'react';
import BoardItem from '../board-item';

import './boards-row.css'

const BoardsRow = ({ boards }) => {

  if (boards.length === 0) {
    return (
      <h1>No desks</h1>
    )
  }

  return (
    <ul className="boards__list">
      {
        boards.map(({ id, title }, idx) => {
          return (
            <BoardItem
              key={idx}
              title={title}
              id={id}
           />
          );
        })
      }
    </ul>
  )
}

export default BoardsRow;
