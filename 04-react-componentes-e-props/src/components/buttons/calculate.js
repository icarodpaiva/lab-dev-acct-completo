import React from "react";
import './style.css';

class CalculateButton extends React.Component{


render(){
    const{count} = this.props;
    return <div onClick={() =>count()} className="grid-button-item calculate">=</div> 
}


}

export default CalculateButton;