import React from 'react';
import Header from '../header';
import { Redirect } from 'react-router-dom';


const Profile = ({ isLogin }) => {
  console.log(isLogin)

  if (!isLogin) {
    return (
      <Redirect to="login" />
    );
  };

  return (
    <div>
      <Header />
      Поздавляю дружок, ты добрался куда надо! если ты уебок...
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
