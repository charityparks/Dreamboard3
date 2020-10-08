const initialState = {
    boards: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_BOARDS":
            return {
                ...state, 
                boards: action.boards
            }
        case "ADD_BOARD":
            // return {state.concat(action.board)}
            return {
              ...state,
              boards: [...state.boards, action.board]
            }
    
        default:
            return state
    }
}
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

