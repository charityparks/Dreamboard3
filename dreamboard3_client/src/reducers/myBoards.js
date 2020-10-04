export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_BOARDS":
            return action.boards

        default:
            return state
    }
}