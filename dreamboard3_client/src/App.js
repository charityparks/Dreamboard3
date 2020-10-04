import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import MainContainer from './components/MainContainer.js'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        Hello, I'm React
        <MainContainer />
      </div>
    
    );
  }
}


export default App;
