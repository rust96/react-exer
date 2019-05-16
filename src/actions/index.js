import { checkCredentials } from '../utils/checkCredentials'

const onBoardCreate = (data) => {
  return {
    type: 'ON_BOARD_CREATE',
    payload: data
  }
}

const addListTitle = (title, boardId) => {
  return {
    type: 'ADD_LIST_TITLE',
    payload: title,
    boardId: boardId
  }
}

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

const requestData = (data) => (dispatch) => {
  dispatch(fetchData(data));

  fetch('https://www.balldontlie.io/api/v1/players')
  .then((response) => {
    if(response.ok) {
    return response.json();
  }
    throw new Error('Network response was not ok.');
  })
  .then((myResponse) => {
    console.log(myResponse);
    console.log(data.login)
    setTimeout(() => {
      if (data.login == 1 && data.password == 1) {
        return dispatch(fetchDataSuccess())
      }
      dispatch(fetchDataError());
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
  requestData,
  onBoardCreate,
  addListTitle
}
