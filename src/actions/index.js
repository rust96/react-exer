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

export const addListName = (name) => {
  return {
    type: 'ADD_LIST_NAME',
    payload: name
  }
}

export const addTask = (task, boardId, listIdx) => {
  return {
    type: 'ADD_TASK',
    payload: task,
    boardId,
    listIdx
  }
}
