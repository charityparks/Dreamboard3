import { resetBoardForm } from './boardForm'
// import {setMyBoards} from '../reducers/myBoards'

export const setMyBoards = boards => {
  return {
    type: "SET_MY_BOARDS",
    boards
  }
}

export const clearBoards = () => {
  return {
    type: "CLEAR_BOARDS"
  }
}

export const addBoard = board => {
  return {
    type: "ADD_BOARD",
    board
  }
}

export const deleteBoardSuccess = boardId => {
  return {
    type: "DELETE_BOARD",
    boardId
  }
}

export const updateBoardSuccess = board => {
  return {
    type: "UPDATE_BOARD",
    board
  }
}

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
  export const updateBoard = (boardData, history) => {
    return dispatch => {
      const sendableBoardData = {
        title: boardData.title,
        author: boardData.author,
      }
      return fetch(`http://localhost:3001/api/v1/boards/${boardData.boardId}`, {
        credentials: "include",
        method: "PATCH",
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
            dispatch(updateBoardSuccess(resp.data))
            history.push(`/boards/${resp.data.id}`)
           
          }
        })
        .catch(console.log)
  
    }
  }
  
  export const deleteBoard = (boardId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/v1/boards/${boardId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteBoardSuccess(boardId))
            history.push(`/boards`)
         
          }
        })
        .catch(console.log)
  
    }
  
  }
  