import React from "react";
import './style.css';

class ClearButton extends React.Component{
  
    render(){
        const{clear}= this.props
        return  <div onClick={() => clear()} className="grid-button-item clear">C</div>
    }
}

export default ClearButton; 