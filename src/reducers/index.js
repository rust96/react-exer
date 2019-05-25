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
  const { rmList, rmTask, addList, addTask, boardId } = action;

  if (rmList === addList && rmTask === addTask) {
    return state;
  }

  const removedTask = state.boards[boardId].cells[rmList].elements[rmTask];
  const choosenTasksArr = state.boards[boardId].cells[addList].elements;
  const choosenTasksCell = state.boards[boardId].cells[addList];


  let newAddTasks = [];
  if (addTask === 0) {
    newAddTasks = [removedTask, ...choosenTasksArr];
  } else if (addTask === choosenTasksArr.length) {
    newAddTasks = [...choosenTasksArr, removedTask];
  } else {
    newAddTasks = [
      ...choosenTasksArr.slice(0, addTask),
      removedTask,
      ...choosenTasksArr.slice(addTask)
    ]
  }

  const newCellAdd = {
    ...choosenTasksCell,
    elements: newAddTasks
  }

  let newListsArray = [
      ...state.boards[boardId].cells.slice(0, addList),
      newCellAdd,
      ...state.boards[boardId].cells.slice(addList + 1)
    ];

  const newBoard = {
    ...state.boards[boardId],
    cells: newListsArray
  };

  const newBoards = [
    ...state.boards.slice(0, boardId),
    newBoard,
    ...state.boards.slice(boardId + 1)
  ]

  const newState = {
    ...state,
    boards: newBoards
  }

  const removingCell = newState.boards[boardId].cells[rmList];

  let newRmTasks = [];
  if (rmList === addList && rmTask < addTask) {
    newRmTasks = [
      ...removingCell.elements.slice(0, rmTask),
      ...removingCell.elements.slice(rmTask + 1)
    ]
  } else if (rmList === addList && rmTask > addTask) {
    newRmTasks = [
      ...removingCell.elements.slice(0, rmTask + 1),
      ...removingCell.elements.slice(rmTask + 2)
    ]

  } else if (rmTask === 0) {
    newRmTasks = [...removingCell.elements.slice(rmTask + 1)];
  } else if (rmTask === removingCell.elements.length - 1) {
    newRmTasks = [...removingCell.elements.slice(0, rmTask)];
  } else {
    newRmTasks = [
      ...removingCell.elements.slice(0, rmTask),
      ...removingCell.elements.slice(rmTask + 1)
    ]
  }

  const newRmCell = {
    ...removingCell,
    elements: newRmTasks
  }

  let newRmLists = [
    ...newState.boards[boardId].cells.slice(0, rmList),
    newRmCell,
    ...newState.boards[boardId].cells.slice(rmList + 1)
  ];

  const newRmBoard = {
    ...newState.boards[boardId],
    cells: newRmLists
  };

  const newRmBoards = [
    ...newState.boards.slice(0, boardId),
    newRmBoard,
    ...newState.boards.slice(boardId + 1)
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
