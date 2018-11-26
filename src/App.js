import React, { Component } from 'react';
import Board from './components/Board/board';
import BoardHead from './components/BoardHead/boardHead';
import './App.css';

class App extends Component {

  state = {
    status: "started",
    rows:10,
    columns:10,
    flags: 10,
    timer:0,
    openCells: 0,
    mines: 10
  }

  tick = () => {
    if (this.state.openCells > 0 && this.state.gameStatus === "running") {
      let time = this.state.time + 1;
      this.setState({ time });
    }
  };
  
  handleCellClick = () => {
    if (this.state.openCells === 0 && this.state.gameStatus !== "running") {
      this.setState(
        {
          gameStatus: "running"
        },
        this.setInterval(this.tick, 1000)
      );
    }
    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    });
  };

  render() {
    return (
      <div className="App">
       <div className="minesweeper">
          <BoardHead timer={this.state.timer} flagCount={this.state.flags}/>
          <Board 
            rows={this.state.rows} 
            columns={this.state.columns} 
            mines={this.state.mines} 
            openCells={this.state.openCells}/>
      </div>
      </div>
    );
  }
}

export default App;
