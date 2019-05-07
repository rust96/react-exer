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
          isLoggin={props.isLoggin} />
       )}
      />

      <Route
       path="/login"
       component={Login}
      />
    </Switch>
  );
}

const mapStateToProps = (props) => {
  return {
    isLoggin: props.isLoggin
  }
}

export default connect(mapStateToProps)(App);
