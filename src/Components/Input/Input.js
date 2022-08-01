import { useState } from "react";
import Button from "../Button";

const InputFoodBank = () => {
    let [inputFoodBank, setInputFoodBank] = useState("")

    function handleChange(e) {
        setInputFoodBank(e.target.value)
        console.log(inputFoodBank)
        
    }
    return ( 
        <div className="inputfoodbank">
            <input placeholder="Type your post code" onChange={handleChange}/>
            <button >Submit</button>
        </div>
     );
}
 
export default InputFoodBank;