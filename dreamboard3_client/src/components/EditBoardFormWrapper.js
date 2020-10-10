import React from 'react';
import BoardForm from './BoardForm'
import { updateBoard, deleteBoard } from '../actions/myBoards'
import { setFormDataForEdit, resetBoardForm } from '../actions/boardForm'
import { connect } from 'react-redux'

class EditBoardFormWrapper extends React.Component {
    
  componentDidMount(){
    this.props.board && this.props.setFormDataForEdit(this.props.board)
  }

  componentDidUpdate(prevProps) {
    this.props.board && !prevProps.board && this.props.setFormDataForEdit(this.props.board)
  }

  componentWillUnmount() {
    this.props.resetBoardForm()
  }

  handleSubmit = (formData) => {
    const { updateBoard, board, history } = this.props
    updateBoard({
      ...formData,
      boardId: board.id
    }, history)
  }

  render() {
    const { history, deleteBoard, board } = this.props
    const boardId = board ? board.id : null
    return  <>
              <BoardForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}} onClick={()=>deleteBoard(boardId, history)}>Delete this board</button>
            </>
  }
};

export default connect(null, { updateBoard, setFormDataForEdit, resetBoardForm, deleteBoard })(EditBoardFormWrapper);