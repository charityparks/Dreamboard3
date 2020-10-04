export const setMyBoards = boards => {
    return {
      type: "SET_MY_BOARDS",
      boards
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