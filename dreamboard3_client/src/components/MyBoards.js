import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyBoards = props => {
    const boardCards = props.boards.length > 0 ? 
        props.boards.map(b => (<p key={b.id}><Link to={`/boards/${b.id}`}>{b.attributes.title}</Link></p>)) :
    null 
    return  boardCards
}

const mapStateToProps = state => {
    return {
        boards: state.myBoards    
    }
}

export default connect(mapStateToProps)(MyBoards)

// keys are a way for React to identify what has changed or added/removed.