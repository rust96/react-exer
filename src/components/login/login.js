import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitData } from '../../actions';
import Header from '../header';

class Login extends Component {

  state = {
    password: "",
    login: ""
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
    console.log(this.props)
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
      dispatch(submitData(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
