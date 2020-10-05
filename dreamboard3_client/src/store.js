import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import myBoards from './reducers/myBoards.js'
import newBoardForm from './reducers/newBoardForm.js'


const reducer = combineReducers({
    
    myBoards,
    newBoardForm

  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


  export default store
