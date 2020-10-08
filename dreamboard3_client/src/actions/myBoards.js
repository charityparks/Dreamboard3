import { resetBoardForm } from './boardForm'
import {setMyBoards, addBoard} from '../reducers/myBoards'



  export const getMyBoards = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/boards", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setMyBoards(response.data))
          }
        })
        .catch(console.log)
    }
  } 

  export const createBoard = (boardData, history) => {
    return dispatch => {
      const sendableBoardData = {
        title: boardData.title,
        author: boardData.author,
      }
      return fetch("http://localhost:3001/api/v1/boards", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableBoardData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
              dispatch(addBoard(resp.data))
              dispatch(resetBoardForm())
              history.push(`/boards/${resp.data.id}`)
            
          }
        })
        .catch(console.log)
  
    }
  }
  