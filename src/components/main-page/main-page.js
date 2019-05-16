import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../header';
import BoardCreator from '../board-creator'
import BoardsRow from '../boards-row';

import './main-page.css';

const MainPage = (props) => {
  console.log(props)
  return (
    <div>
      <Header />
      <h1 className="main-page__title">Привет, ты на главной странице клона Трелло!</h1>
      <BoardCreator />
      <BoardsRow boards={props.boards}/>
     </div>
  )
};

const mapStateToProps = ({ title, boards }) => {
  return {
    title,
    boards
  }
}



export default connect(mapStateToProps)(MainPage);
