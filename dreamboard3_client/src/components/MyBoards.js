import React from 'react'
import BoardCard from './BoardCard.js'
import { connect } from 'react-redux'

const MyBoards = props => {
    const boardCards = props.boards.length > 0 ? props.boards.map(b => <BoardCard board={b} key={b.id}/>) : null
    return (
        boardCards
    )  
}

const mapStateToProps = state => {
    // const boardNames = myBoards.map(b => b.name)
    return {
        boards: state.myBoards    
    }
}
export default connect(mapStateToProps)(MyBoards)