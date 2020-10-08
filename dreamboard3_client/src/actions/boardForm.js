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