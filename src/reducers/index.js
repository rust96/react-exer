import { loadState } from '../localStorage';

const initialState = loadState();

const createBoard = (state, action) => {

  const newBoard = {
    id: state.boards.length,
    title: action.payload,
    cells: []
  }

  return {
    ...state,
    boards: [
      ...state.boards,
      newBoard
    ]
  }
}

const createList = (state, action) => {
  const { boardId, payload } = action;

  const needBoard = state.boards.find((b) => {
    return b.id === +boardId;
  });

  const newList = {
    title: payload,
    elements: []
  }

  const newBoardList = {
    ...needBoard,
    cells: [
      ...needBoard.cells,
      newList
    ]
  }

  const newBoards = [
    ...state.boards.slice(0, parseInt(boardId)),
    newBoardList,
    ...state.boards.slice(parseInt(boardId) + 1)
  ];

  return {
    ...state,
    boards: newBoards
  }
}

const createTask = (state, action) => {
  const { boardId, listIdx, payload } = action;

  const needList = state.boards
    .find((b) => b.id === +boardId).cells[listIdx].elements;

  const allCells = state.boards
    .find((b) => b.id === +boardId).cells;

  const newList = [
    ...needList,
    payload
  ];

  const needCells = state.boards
    .find((b) => b.id === +boardId)
    .cells[listIdx];

  const newCells = {
    ...needCells,
    elements: newList
  };

  const allNewCells = [
    ...allCells.slice(0, listIdx),
    newCells,
    ...allCells.slice(listIdx + 1)
  ];

  const needBoard = state.boards
    .find((b) => b.id === +boardId);

  const newBoards = {
    ...needBoard,
    cells: allNewCells
  }

  return {
    ...state,
    boards: [
      ...state.boards.slice(0, boardId),
      newBoards,
      ...state.boards.slice(boardId + 1)
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
  if (action.rmList === action.addList && action.rmTask < action.addTask) {
    newRmTasks = [
      ...removingCell.elements.slice(0, action.rmTask),
      ...removingCell.elements.slice(action.rmTask + 1)
    ]
  } else if (action.rmList === action.addList && action.rmTask > action.addTask) {
    newRmTasks = [
      ...removingCell.elements.slice(0, action.rmTask + 1),
      ...removingCell.elements.slice(action.rmTask + 2)
    ]

  } else if (action.rmTask === 0) {
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

  return {
    ...state,
    boards: newRmBoards
  }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'CREATE_BOARD':
      return createBoard(state, action);

    case 'CREATE_LIST':
      return createList(state, action);

    case 'CREATE_TASK':
      return createTask(state, action);

    case 'DRAG_TASK':
      return dragTask(state, action);

    default:
      return state;
  }
};

export default reducer;
