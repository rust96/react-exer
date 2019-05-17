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

const updateListName = (state, action) => {
  // const needBoard = state.boards.find((b) => {
  //   return b.id == action.boardId;
  // });
  //
  // // const oldCells = needBoard.cells;
  // const newCells = {
  //   title: action.payload,
  //   elements: needBoard.cells
  // }
  //
  // const newB = {
  //   ...needBoard,
  //   cells: newCells
  // }
  //
  // const newBoards = [
  //   ...state.boards.slice(0, parseInt(action.boardId)),
  //   newB,
  //   ...state.boards.slice(parseInt(action.boardId) + 1)
  // ];
  //
  // return {
  //   ...state,
  //   boards: newBoards
  // }
}

const reducer = (state = initialState, action) => {
  console.log(action.type, action.payload)

  switch (action.type) {

    case 'ON_BOARD_CREATE':
      return updateBoards(state, action);

    case 'ADD_LIST_TITLE':
      return updateListTitle(state, action);

    case 'ADD_LIST_NAME':
      return updateListName(state, action);

    case 'FETCH_DATA':
      return {
        ...state,
        loading: true
      }

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true
      }

    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        error: true
      }

    default:
      return state;
  }
};

export default reducer;
