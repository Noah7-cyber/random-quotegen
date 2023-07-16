
import React from "react";

const Button = ({buttonText, buttonFunction,buttonColor}) =>{
    return(
        <button style={{backgroundColor: buttonColor, color:"whitesmoke"}} id= "new-quote"  onClick={buttonFunction}>{buttonText}</button>
    )
}
export default Button;