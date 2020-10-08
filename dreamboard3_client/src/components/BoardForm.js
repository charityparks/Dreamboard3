import React from 'react'
import { updateBoardForm } from '../actions/boardForm'
import { createBoard } from '../actions/myBoards'
import { connect } from 'react-redux'

const BoardForm = ({ formData, history, updateBoardForm, createBoard }) => {
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
            type="submit"
            value="Create Board"
            />
        </form>

)};

const mapStateToProps = state => {
    return {
        formData: state.BoardForm
    }
}
export default connect(mapStateToProps, { updateBoardForm, createBoard })(BoardForm);
