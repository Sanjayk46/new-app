import React from "react";
import "./Input.css"
function InputComponent(props){
    return(
    <div>
        <label for={props.id} className="form-label">
            {props.label}</label>
        <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder}></input>    
        </div>
    
    )
}
export default InputComponent;