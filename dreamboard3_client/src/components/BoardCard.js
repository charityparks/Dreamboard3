import React from 'react'
import {Link} from 'react-router-dom'

const BoardCard = ({ board }) => {
    return (
        board ?
        <div>
            <h3>{board.attributes.title}</h3>
            <p>Author:{board.attributes.author}</p>
            <p>{board.entry.attributes.item}</p>
            <Link to={`/boards/${board.id}/edit`}>Edit this board</Link>
        </div> :
            <p>This BoardCard has no Board!</p>
    )  
}

export default BoardCard



