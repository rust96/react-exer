import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { saveState } from './localStorage';


const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
