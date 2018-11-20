import React, { Component } from 'react';
import Board from './components/Board/board';
import BoardHead from './components/BoardHead/boardHead';
import './App.css';

class App extends Component {

  state = {
    rows:10,
    columns:10,
    flags: 10,
    timer:0,
    mines: 10
  }

  render() {
    return (
      <div className="App">
       <div className="minesweeper">
          <BoardHead timer={this.state.timer} flagCount={this.state.flags}/>
          <Board rows={this.state.rows} columns={this.state.columns} mines={this.state.mines}/>
      </div>
      </div>
    );
  }
}

export default App;
