
import React from "react";

const Button = ({buttonText, buttonFunction, buttonColor}) =>{
    return(
        <button  className="pt-2 pr-3 pl-4 pb-2 rounded-sm hover:text-2xl " style={{backgroundColor: buttonColor, color:"whitesmoke"}} id= "new-quote"  onClick={buttonFunction}>{buttonText}</button>
    )
}
export default Button;