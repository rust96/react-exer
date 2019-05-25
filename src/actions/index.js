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

export const addTask = (task, boardId, listIdx) => {
  return {
    type: 'ADD_TASK',
    payload: task,
    boardId,
    listIdx
  }
}

export const dragTask = (rmList, rmTask, addList, addTask, boardId) => {
  console.log(rmList)
  return {
    type: 'DRAG_TASK',
    rmList,
    rmTask,
    addList,
    addTask,
    boardId
  }
}
