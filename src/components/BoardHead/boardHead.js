import React from "react";

const BoardHead = props => {
    //adding timer
    let minutes = Math.floor(props.timer / 60);
    let seconds = props.timer - minutes * 60 || 0;
    
       if(seconds<10){
        var formattedSec = `0${seconds}`
       }else{
        var formattedSec = seconds;
       }
    //let formattedSec = seconds < 10 ? `0${seconds}` : seconds;
    let time = `${minutes}:${formattedSec}`;

    
    return (
    <div className="board-head">
        <div className="flagCount">{props.flagCount}</div>
        <button className="reset"></button>
        <div className="timer">{time}</div>
    </div>);
 
};

export default BoardHead;