import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk';
import myBoards from './reducers/myBoards.js'


const reducer = combineReducers({
    users: usersReducer,
    myBoards
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


  export default store
