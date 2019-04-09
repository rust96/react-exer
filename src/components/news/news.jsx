import React from 'react';
import { Redirect } from 'react-router-dom';

const News = () => {

  return (
    <div>
      <Redirect to="/profile" />
      <h1>News</h1>
    </div>
  )
}

export default News;
