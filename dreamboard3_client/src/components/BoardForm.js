import React from 'react'
import { updateBoardForm } from '../actions/boardForm'
// import {setMyBoards} from '../reducers/myBoards'

import { createBoard } from '../actions/myBoards'
import { connect } from 'react-redux'

const BoardForm = ({ formData, updateBoardForm, createBoard, editMode }) => {
    const { title, author } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateBoardForm(name, value)
    }  
    const handleSubmit = event => {
        event.preventDefault()
        createBoard({...formData})
    }
   
    return (
        <form onSubmit={handleSubmit}>
    
            <h1>New DreamBoard!</h1>
            <input
                type="text"
                placeholder="DreamBoard Title"
                name="title"
                onChange={handleChange}
                value={title}
            /><br/>
            <input
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
                value={author}
            /><br/>
            <input 
                type="text"
                placeholder="item"
                name="item"
                onChange={handleChange}
                value={item}
            /><br/>
            <input 
                type="submit"
                value={editMode ? "Update Board" : "Create Board"}
            /></form>

)};

const mapStateToProps = state => {
    return {
        formData: state.boardForm
    }
}

export default connect(mapStateToProps, { updateBoardForm, createBoard })(BoardForm);
