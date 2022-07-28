import './footer.css';
import Logo from '../../img/YourLocalFBLogo.png';
import Instagram from '../../img/IGLogo.png';
import Twitter from '../../img/TwitterLogo.png';

const Footer = () => {
    return ( 
        <div className="footer">
            <img className="img-footer" src={Logo} alt="Food Bank Logo"/>
            <div className='footer-container'>
                <h3>FOLLOW US</h3>
                <img className="ig-logo" src={Instagram} alt="Instagram Logo"/>
                <img className="ig-logo" src={Twitter} alt="Twitter Logo"/>
            </div>
        </div>
     );
}
 
export default Footer;