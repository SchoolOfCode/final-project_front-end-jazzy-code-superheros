
import "./Input.css"

const InputFoodBank = ({handleChange, handleClick, handleEnter}) => {
  
    return ( 
        <div className="inputfoodbank">
            <input placeholder="Type your post code" id="postcode" onChange={handleChange} onKeyPress={handleEnter}/>
            <button onClick={handleClick} >Submit</button>
        </div>
     );
}
 
export default InputFoodBank;