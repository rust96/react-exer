import { CREATE_BOARD } from '../constants';
import { CREATE_LIST } from '../constants';
import { CREATE_TASK } from '../constants';
import { DRAG_TASK } from '../constants';

export const createBoard = (data) => {
  return { type: CREATE_BOARD, payload: data }
}

export const createList = (title, boardId) => {
  return { type: CREATE_LIST, payload: title, boardId }
}

export const createTask = (task, boardId, listIdx) => {
  return {
    type: CREATE_TASK,
    payload: task,
    boardId,
    listIdx
  }
}

export const dragTask = (rmList, rmTask, addList, addTask, boardId) => {
  return {
    type: DRAG_TASK,
    rmList,
    rmTask,
    addList,
    addTask,
    boardId
  }
}
