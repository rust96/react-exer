import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  console.log(props)

  return (
    <div>
      <h1>MainPage</h1>
      <h4>{props.title}</h4>
      <h5>{props.hello}</h5>
      <Link to="/news">News</Link>
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
