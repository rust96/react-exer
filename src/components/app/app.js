import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../main-page';
import News from '../news';
import Profile from '../profile';
import Login from '../login';



const App = (props) => {
  console.log(props)
  return (
    <Switch>
      <Route
       path="/"
       component={MainPage}
       exact
      />

      <Route
       path="/news"
       component={News}
      />

      <Route
       path="/profile"
       render={() => (
         <Profile
          isLogin={props.isLogin}
          loading={props.loading} />
       )}
      />

      <Route
       path="/login"
       render={() => (
         <Login
          isLogin={props.isLogin}
          loading={props.loading} />
       )}
      />
    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);
