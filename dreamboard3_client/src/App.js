import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import NavBar from './components/NavBar.js'
import MyBoards from './components/MyBoards.js'
import NewBoardForm from './components/NewBoardForm.js'

import Home from './components/Home.js'
import MainContainer from './components/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <div className="App">
      <Switch>
          Hello, I'm React
          
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/boards' component={MyBoards}/> 
          <Route exact path='/boards/new' component={NewBoardForm}/>

      </Switch>
      </div>
    
    );
  }
}
// // app.js
// <Route exact path="/" component={Home} />

export default App;
