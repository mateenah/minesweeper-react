import React, { Component } from 'react';
import Board from './components/BoardHead/board';
import './App.css';

class App extends Component {

  state = {
    rows:10,
    columns:10,
    flags: 10,
    mines: 10
  }

  render() {
    return (
      <div className="App">
       <div className="minesweeper">
       <Board rows={this.state.rows} columns={this.state.columns} mines={this.state.mines}/>
      </div>
      </div>
    );
  }
}

export default App;
