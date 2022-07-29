import {List} from '../List'
import ToggleCardKids from '../GetHelp/ToggleCardChildren'
import Button from '../Button'

import './style.css'

const GiveHelp = ({foodBankData}) => {

  return (
    <>
      <h1>Give Help</h1>

      <div className="imageDiv">
        <img
          className="bannerImage"
          src="https://i.imgur.com/VWCzSCo.jpeg"
          alt="container-cover-image"
        ></img>
      </div>

      <ToggleCardKids 
        cardTitle='Donate Your Money' 
        cardBody='Any financial contribution you can make will enable us to continue serving our community'>
        <Button nameButton='Donate'/>
      </ToggleCardKids>

      <ToggleCardKids cardTitle='Donate Items'>
        <List foodBankData={foodBankData}/>
      </ToggleCardKids>

      <ToggleCardKids 
        cardTitle='Donate Your Time' 
        cardBody='Placeholder for form'
      />

      <img
        className="mapImage"
        src="https://www.givefood.org.uk/needs/at/vauxhall/map.png"
        alt="map-image"
      />

      
    </>
  )
};

export default GiveHelp;
