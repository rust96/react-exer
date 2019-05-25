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

const updateBoards = (state, action) => {
  const newBoard = {
    id: state.boards.length,
    title: action.payload,
    cells: []
  }

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

const dragTask = (state, action) => {

  if (action.rmList === action.addList && action.rmTask === action.addTask) {
    return state;
  }

  const removedTask = state.boards[action.boardId].cells[action.rmList].elements[action.rmTask];
  const choosenTasksArr = state.boards[action.boardId].cells[action.addList].elements;
  const choosenTasksCell = state.boards[action.boardId].cells[action.addList];
  const choosenListRm = state.boards[action.boardId].cells[action.rmList];
  const choosenBoard = state.boards[action.boardId];


  let newAddTasks = [];
  if (action.addTask === 0) {
    newAddTasks = [removedTask, ...choosenTasksArr];
  } else if (action.addTask === choosenTasksArr.length) {
    newAddTasks = [...choosenTasksArr, removedTask];
  } else {
    newAddTasks = [
      ...choosenTasksArr.slice(0, action.addTask),
      removedTask,
      ...choosenTasksArr.slice(action.addTask)
    ]
  }

  const newCellAdd = {
    ...choosenTasksCell,
    elements: newAddTasks
  }

  let newListsArray = [
      ...state.boards[action.boardId].cells.slice(0, action.addList),
      newCellAdd,
      ...state.boards[action.boardId].cells.slice(action.addList + 1)
    ];

  const newBoard = {
    ...state.boards[action.boardId],
    cells: newListsArray
  };

  const newBoards = [
    ...state.boards.slice(0, action.boardId),
    newBoard,
    ...state.boards.slice(action.boardId + 1)
  ]

  const newState = {
    ...state,
    boards: newBoards
  }


  const removingCell = newState.boards[action.boardId].cells[action.rmList];

  let newRmTasks = [];
  if (action.rmTask === 0) {
    newRmTasks = [...removingCell.elements.slice(action.rmTask + 1)];
  } else if (action.rmTask === removingCell.elements.length - 1) {
    newRmTasks = [...removingCell.elements.slice(0, action.rmTask)];
  } else {
    newRmTasks = [
      ...removingCell.elements.slice(0, action.rmTask),
      ...removingCell.elements.slice(action.rmTask + 1)
    ]
  }

  const newRmCell = {
    ...removingCell,
    elements: newRmTasks
  }

  let newRmLists = [
    ...newState.boards[action.boardId].cells.slice(0, action.rmList),
    newRmCell,
    ...newState.boards[action.boardId].cells.slice(action.rmList + 1)
  ];

  const newRmBoard = {
    ...newState.boards[action.boardId],
    cells: newRmLists
  };

  const newRmBoards = [
    ...newState.boards.slice(0, action.boardId),
    newRmBoard,
    ...newState.boards.slice(action.boardId + 1)
  ]
  console.log(newRmBoard)

  return {
    ...state,
    boards: newRmBoards
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

    case 'DRAG_TASK':
      return dragTask(state, action);

    default:
      return state;
  }
};

export default reducer;
