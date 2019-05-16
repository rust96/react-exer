import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../main-page';
import News from '../news';
import Profile from '../profile';
import Login from '../login';
import PageNotFound from '../page-not-found';

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
       path="/news/"
       component={News}
       exact
      />

      <Route
       path="/news/:id"
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
          { ...props } />
       )}
      />

      <Route
       component={PageNotFound}
      />

    </Switch>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps)(App);
