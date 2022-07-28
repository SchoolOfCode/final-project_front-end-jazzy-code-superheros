import "./style.css"

//The props from the home page are being passed down to render on the About Us component, This page on line 10 is being condicional 
//Because of the async function on the home page
const AboutUs = ({foodBankData}) => {
    return (
    
    <div className="AboutUsContainer">
        <img className="ImgAboutUs" src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"/>
        
        {foodBankData ? 
        
        <div className="TextContainer">
        
            <h3>Your Support is Really Powerful.​</h3>
            
            <p className="Message">"The secret to happiness lies in helping others. Never

            underestimate the difference YOU can make "</p>

          

        
            <br></br>

            <p className="justify"><b>Address: </b>{foodBankData.address}</p>
            
            <p className="justify" ><b>Email:</b> {foodBankData.email}</p>
        
            <p className="justify"><b>Phone:</b> {foodBankData.phone}</p>
        
        </div>
        
        : null
        }
              
        
        

    </div>);
}

export default AboutUs;