import React from 'react';
import { connect } from 'react-redux';
import BoardCreator from '../../containers/board-creator'
import BoardsRow from '../boards-row';

import './main-page.css';

const MainPage = ({ boards }) => {
  return (
    <div>
      <h1 className="main-page__title">Для начала работы выберите доску</h1>
      <BoardCreator />
      <BoardsRow boards={boards}/>
     </div>
  )
};

const mapStateToProps = ({ boards }) => {
  return {
    boards
  }
}

export default connect(mapStateToProps)(MainPage);
