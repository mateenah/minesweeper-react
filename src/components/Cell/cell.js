import React from "react";
//import Cell from "../Cell";

const Cell = props => {
    console.log(props.data)
  let renderCell = () => {
      if(props.data.isOpen){
        return(
            <div className="cellOpen">

            </div>
        )
        }else{
            return(
            <div className="cell">

            </div>
                )
        }
  }

  return renderCell();
};

export default Cell;