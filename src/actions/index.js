export const createBoard = (data) => {
  return {
    type: 'CREATE_BOARD',
    payload: data
  }
}

export const createList = (title, boardId) => {
  return {
    type: 'CREATE_LIST',
    payload: title,
    boardId
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

export const dragTask = (rmList, rmTask, addList, addTask, boardId) => {
  return {
    type: 'DRAG_TASK',
    rmList,
    rmTask,
    addList,
    addTask,
    boardId
  }
}
