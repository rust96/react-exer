import React from 'react';
import { Link } from 'react-router-dom';

import './board-item.css';

const BoardItem = ({ title, id }) => {
  const path = `/news/${id}`;
  return (
        <li className="board__item"><Link className="board__link" to={path}> {title} </Link></li>
  );
}

export default BoardItem;
