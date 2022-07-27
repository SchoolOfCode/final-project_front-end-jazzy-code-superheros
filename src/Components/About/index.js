import "./style.css"

const AboutUs = ({foodBankData}) => {
    return (
    
    <div className="AboutUsContainer">
        <img className="ImgAboutUs" src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000"/>
        
        {foodBankData ? 
        
        <div className="TextContainer">
        
            <h3>Your Support is Really Powerful.​</h3>
            
            <p>"The secret to happiness lies in helping others. Never
            underestimate the difference YOU can make in the
            lives of the poor, the abused and the helpless."</p>
            
            <h1>{foodBankData.name}</h1>    
        
            <p>Address: {foodBankData.address}</p>
            
            <p>Email: {foodBankData.email}</p>
        
            <p>Phone: {foodBankData.phone}</p>
        
        </div>
        
        : null
        }
              
        
        

    </div>);
}

export default AboutUs;