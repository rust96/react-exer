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
        loading: true
      }

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true
      }

    default:
      return state;
  }
};

export default reducer;
