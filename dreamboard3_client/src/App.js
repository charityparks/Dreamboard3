import React from 'react';
import './App.css';
import { connect, useDispatch } from 'react-redux'
import NavBar from './components/NavBar.js'
import MyBoards from './components/MyBoards.js'
import BoardForm from './components/BoardForm.js'
import BoardCard from './components/BoardCard.js'
import Home from './components/Home.js'
import NewBoardFormWrapper from './components/NewBoardFormWrapper.js'
import EditBoardFormWrapper from './components/EditBoardFormWrapper.js'
import MainContainer from './components/MainContainer.js'
import { Route, Switch, withRouter } from 'react-router-dom'
import {getMyBoards} from './actions/myBoards'

class App extends React.Component {
  componentDidMount() {
    this.props.getMyBoards()
  }

  render(){
    return (
      <div className="App">
        <NavBar />

        <Switch>     
            <Route exact path='/' component={Home}/>
            <Route exact path='/boards' component={MyBoards}/>
            <Route exact path='/boards/new' component={BoardForm}/>
            <Route exact path='/boards/:id' render={props => {
              const board = this.props.boards.find(board => board.id === props.match.params.id)
              return <BoardCard board={board}{...props}/>
              }
            }/>
            <Route exact path='/boards/:id/edit' render={props => {
                const board = this.props.boards.find(board => board.id === props.match.params.id)
                return <EditBoardFormWrapper board={board} {...props}/>
              }
            }/>
        </Switch>   
      </div>
    
    );
  }
}
const mapStateToProps = state => ({
   
    boards: state.myBoards

})


export default withRouter(connect(mapStateToProps, { getMyBoards })(App));
