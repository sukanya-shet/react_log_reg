import React from "react"
function Input(props){
  return <div>
    <input className="form-cont" type={props.type} placeholder={props.placeholder}/>
    </div>
}
export default Input;