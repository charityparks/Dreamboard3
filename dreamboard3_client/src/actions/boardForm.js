// sync actions

export const updateBoardForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_BOARD_FORM", 
        formData
    }
}

export const resetBoardForm = () => {
    return {
      type: "RESET_NEW_BOARD_FORM",
    }
  }

  export const setFormDataForEdit = board => {
    const boardFormData = {
      title: board.attributes.title,
      author: board.attributes.author,
    }
    return {
      type: "SET_FORM_DATA_FOR_EDIT",
      boardFormData
    }
  }