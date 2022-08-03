
import "./Input.css"

const InputFoodBank = ({handleChange, handleClick, handleEnter}) => {
  
    return ( 
        <div className="inputfoodbank">
            <input placeholder="search for foodbanks" id="inputbox" onChange={handleChange} onKeyPress={handleEnter}/>
            <button onClick={handleClick} >Submit</button>
        </div>
     );
}
 
export default InputFoodBank;