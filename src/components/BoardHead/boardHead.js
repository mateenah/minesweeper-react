import React from "react";

const BoardHead = props => {
    //adding timer
    let minutes = Math.floor(props.timer / 60);
    let seconds = props.timer - minutes * 60 || 0;
    let formattedSec = 0;
       if(seconds<10){
        let formattedSec = `0${seconds}`
       }else{
        let formattedSec = seconds;
       }
    let time = `${minutes}:${formattedSec}`;

    //let formattedSec = seconds < 10 ? `0${seconds}` : seconds;
    return (
    <div className="board-head">
        <div className="timer">
        {time}
        </div>
    </div>);
 
};

export default BoardHead;