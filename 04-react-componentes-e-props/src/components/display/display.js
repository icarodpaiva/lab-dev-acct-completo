import React from "react";
import './style.css';

class Display extends React.Component{

render(){
 const{result} = this.props
    return <div className='display'>{result}</div>
}
}

export default  Display;