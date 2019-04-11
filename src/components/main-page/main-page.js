import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../header';

const MainPage = (props) => {
  console.log(props)

  return (
    <div>
      <Header />
      <h1>MainPage</h1>
      <h4>{props.title}</h4>
      <button onClick={props.sayHello}>say Hello</button>
    </div>
  )
};

const mapStateToProps = ({ title }) => {
  return {
    title
  }
}

const sayHello = () => {
  return {
    type: 'SAY_HELLO',
    payload: null
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sayHello: () => {
      dispatch(sayHello());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
