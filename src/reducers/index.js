import { loadState } from '../localStorage';

export const persistedState = loadState();
console.log(persistedState)

const emptyState = {
  boards: [],
  loading: false,
  isLogin: false,
  error: false
}

let initialState;

if (!persistedState) {
  initialState = emptyState;
} else {
  initialState = persistedState;
}


let idCounter = 0;

const updateBoards = (state, action) => {
  const newBoard = {
    id: idCounter,
    title: action.payload,
    cells: []
  }

  idCounter++;

  const freshBoards = [
    ...state.boards,
    newBoard
  ];

  return {
    ...state,
    boards: freshBoards
  }
}

const updateListTitle = (state, action) => {
  const needBoard = state.boards.find((b) => {
    return b.id == action.boardId;
  });

  const newObj = {
    title: action.payload,
    elements: []
  }

  const newCells2 = [
    ...needBoard.cells,
    newObj
  ];

  const newB = {
    ...needBoard,
    cells: newCells2
  }

  const newBoards = [
    ...state.boards.slice(0, parseInt(action.boardId)),
    newB,
    ...state.boards.slice(parseInt(action.boardId) + 1)
  ];

  return {
    ...state,
    boards: newBoards
  }
}

const addTask = (state, action) => {
  const needList = state.boards.
    find((b) => b.id == action.boardId).
    cells[action.listIdx].
    elements;

  const allCells = state.boards.
    find((b) => b.id == action.boardId).
    cells;

  const newList = [
    ...needList,
    action.payload
  ];

  const needCells = state.boards.
    find((b) => b.id == action.boardId).
    cells[action.listIdx];

  const newCells = {
    ...needCells,
    elements: newList
  };

  const allNewCells = [
    ...allCells.slice(0, action.listIdx),
    newCells,
    ...allCells.slice(action.listIdx + 1)
  ];

  const needBoard = state.boards.
    find((b) => b.id == action.boardId);

  const newBoards = {
    ...needBoard,
    cells: allNewCells
  }

  const newState = {
    ...state,
    boards: [
      ...state.boards.slice(0, action.boardId),
      newBoards,
      ...state.boards.slice(action.boardId + 1)
    ]
  }

  return {
    ...state,
    boards: [
      ...state.boards.slice(0, action.boardId),
      newBoards,
      ...state.boards.slice(action.boardId + 1)
    ]
  }
}

const reducer = (state = initialState, action) => {
  console.log(action.type, action.payload)

  switch (action.type) {

    case 'ON_BOARD_CREATE':
      return updateBoards(state, action);

    case 'ADD_LIST_TITLE':
      return updateListTitle(state, action);

    case 'ADD_TASK':
      return addTask(state, action);

    default:
      return state;
  }
};

export default reducer;
