import React from "react";
import './style.css';
import CalculateButton from "./ calculate";
import ClearButton from "./clear";
import DeleteOne from "./delete";


class Button extends React.Component {
  
  render() {
    const { elements, functionNumber, clear, deleteOne, count } = this.props;

    return <>
      <div className="grid-buttons">

        {/* Clar button */}
        <ClearButton clear={clear} />

        {/* Delete One Caracter  */}
        <DeleteOne deleteOne={deleteOne} />

        {/*  Caracters  */}
        {elements.caracteres.map((element) => <div onClick={() => functionNumber(element)} className="grid-button-item">{element}</div>)}

        {/* Calculate Button */}
        <CalculateButton count={count} />

      </div>
    </>


  }

}
export default Button;