import { checkCredentials } from '../utils/checkCredentials'

export const onBoardCreate = (data) => {
  return {
    type: 'ON_BOARD_CREATE',
    payload: data
  }
}

export const addListTitle = (title, boardId) => {
  return {
    type: 'ADD_LIST_TITLE',
    payload: title,
    boardId: boardId
  }
}

export const fetchData = (data) => {
  return {
    type: 'FETCH_DATA',
    payload: data
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  }
}

export const fetchDataError = (data) => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: data
  }
}

export const addListName = (name) => {
  return {
    type: 'ADD_LIST_NAME',
    payload: name
  }
}

export const addTask = () => {
  return {
    type: 'ADD_TASK',
  }
}

export const requestData = (data) => (dispatch) => {
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
