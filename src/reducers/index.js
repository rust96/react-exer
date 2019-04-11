const initialState = {
  title: 'Privet ya store',
  isLoggedIn: false
}

const reducer = (state = initialState, action) => {
  console.log(action.type)

  switch (action.type) {

    case 'SAY_HELLO':
      return {
        ...state,
        hello: 'zdarova'
      }

    case 'SUBMIT_DATA':
      const { login, password } = action.payload;

      if (login === 'rust' && password === '123') {
        return {
          ...state,
          isLoggedIn: true,
          login,
          password
        }
      }

      return state;

    default:
      return state;
  }
};

export default reducer;
