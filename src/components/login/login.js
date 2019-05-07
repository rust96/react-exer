import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, requestData } from '../../actions';
import Header from '../header';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    password: "",
    login: "",
    isLogin: false
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

  componentDidMount () {
    this.setState({ isLogin: this.props.state.isLogin })
  }

  render () {
    const { isLogin } = this.state;
    console.log(this.props)
    console.log(isLogin)

    if (isLogin) {
      return <Redirect to="/profile" />
    }

    return (
      <div>
        <Header />
        <input type="text" name="login" placeholder="login" onChange={this.onLoginHandler} />
        <input type="text" name="password" placeholder="password" onChange={this.onPasswordHandler} />
        <button onClick={this.onSubmit}>Отправить форму</button>
        <h1>Login-Page</h1>
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
