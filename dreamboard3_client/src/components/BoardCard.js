import React from 'react'

const BoardCard = ({ board }) => {
    return (
        <p>{board.attributes.name}</p>
    )
}

export default BoardCard
