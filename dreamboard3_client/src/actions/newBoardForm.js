// sync actions

export const UpdateNewBoardForm =(name, value) => {
    return {
        type: "UPDATE_NEW_BOARD_FORM", 
        formData: { name, value }
    }
}