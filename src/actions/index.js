import { checkCredentials } from '../utils/checkCredentials';

const fetchData = (data) => {
  return {
    type: 'FETCH_DATA',
    payload: data
  }
}

const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  }
}

const fetchDataError = (data) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: data
  }
}

const requestData = () => (dispatch) => {
  dispatch(fetchData());

  fetch('https://www.balldontlie.io/api/v1/players')
  .then((response) => {
    if(response.ok) {
    return response.json();
  }
    throw new Error('Network response was not ok.');
  })
  .then((myResponse) => {
    console.log(myResponse);
    setTimeout(() => {
      dispatch(fetchDataSuccess())
    }, 2000)
  })
  .catch(() => {
    dispatch(fetchDataError());
  })
}

export {
  fetchData,
  fetchDataSuccess,
  fetchDataError,
  requestData
}
