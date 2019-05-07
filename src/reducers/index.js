const initialState = {
  loading: false,
  isLogin: false
}

const reducer = (state = initialState, action) => {
  console.log(action.type)

  switch (action.type) {

    case 'FETCH_DATA':
      return {
        ...state,
        loading: true,
        isLogin: true
      }

      return state;

    default:
      return state;
  }
};

export default reducer;
