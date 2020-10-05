import React from 'react'
import { UpdateNewBoardForm } from '../actions/newBoardForm'
import { connect } from 'react-redux'

const NewBoardForm = ({formData, board})=> {
    const { title, author } = formData

    const handleChange = event => {
        const { name, value } = event.target
        UpdateNewBoardForm(name, value)
    }
    return (
        <form>
            <h1>New DreamBoard!</h1>
            <input
                placeholder="DreamBoard Title"
                name="title"
                onChange={handleChange}
                value={""}
        /><br/>
            <input
                placeholder="Author"
                name="author"
                onChange={handleChange}
                value={""}
            /><br/>
            <input 
            type="submit"
            value="Create Board"
            />
        </form>

)};
export default NewBoardForm;


