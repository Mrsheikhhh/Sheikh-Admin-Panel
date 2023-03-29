import React from "react"
const Button=({bgColor,color,size,borderRadius,text})=>{
  return(
    <button type="button" style={{backgroundColor:bgColor,color,borderRadius}}  className={`text-${size} hover:drop-shadow-x1 p-1`}>
    
    {text}
    
    </button>
    )
}
export default Button