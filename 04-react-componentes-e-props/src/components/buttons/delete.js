import React from "react";
import './style.css';


class DeleteOne extends React.Component{
    

    render(){
        const{deleteOne} = this.props
        return <div onClick={() => deleteOne()} className="grid-button-item delete">{'<'}</div>
    }
}
export default DeleteOne;