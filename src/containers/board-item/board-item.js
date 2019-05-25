import React from 'react';
import { Link } from 'react-router-dom';

import './board-item.scss';

const BoardItem = ({ title, id }) => {
  const remotePath = `/boards/${id}`;

  return (
    <li className="board__item">
      <Link className="board__link" to={remotePath}>
        <div className="board__wrapper">
          <div className="board__inner">
            <p>{ title }</p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BoardItem;