const initialState = {
   title: "",
   author: "" 
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_BOARD_FORM":
            const returnVal = {
                ...state,
                [action.formData.name]: action.formData.value
              }
              return returnVal
        case "RESET_NEW_BOARD_FORM":
            return initialState

        default:
            return state
    }
}