const initialState = {
  title: 'Privet ya store'
}

const reducer = (state = initialState, action) => {
  console.log(state)

  if (action.type === 'SAY_HELLO') {
    return {
      ...state,
      hello: 'zdarova'
    }
  }

  return {
    title: state.title
  }
};

export default reducer;
