import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, requestData } from '../../actions';
import Header from '../header';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    password: "",
    login: "",
  }

  onLoginHandler = (e) => {
    this.setState({
      login: e.target.value
    });
  }

  onPasswordHandler = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = () => {
    const { onSubmitData } = this.props;
    const { password, login } = this.state;
    onSubmitData({ login, password })
  }

  render () {
    const { isLogin, loading } = this.props;

    const loader = (!isLogin && loading) ? <h1>loading...</h1> : null;
    const redirect = (isLogin && !loading) ? <Redirect to="/profile" /> : null;

    const content = () => {
      if (!loading && !isLogin) {
        return (
          <React.Fragment>
            <input type="text" name="login" placeholder="login" onChange={this.onLoginHandler} />
            <input type="text" name="password" placeholder="password" onChange={this.onPasswordHandler} />
            <button onClick={this.onSubmit}>Отправить форму</button>
          </React.Fragment>
        )
      }
    }

      return (
        <div>
          <Header />
            <h1>Login-Page</h1>
            { content() }
            { loader }
            { redirect }
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitData: (data) => {
      dispatch(requestData(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
