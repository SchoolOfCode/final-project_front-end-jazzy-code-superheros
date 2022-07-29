import {List} from '../List'
import ToggleCardKids from '../GetHelp/ToggleCardChildren'
import Button from '../Button'

import './style.css'

const GiveHelp = ({foodBankData}) => {

  return (
    <>
      <h1>Give Help Body</h1>

      <ToggleCardKids 
        cardTitle='Donate Your Money' 
        cardBody='Any financial contribution you can make will enable us to continue serving our community'>
        <Button nameButton='Donate'/>
      </ToggleCardKids>

      <ToggleCardKids cardTitle='Donate Items'>
        <List foodBankData={foodBankData}/>
      </ToggleCardKids>

      <ToggleCardKids cardTitle='Donate Your Time' cardBody='Placeholder for form'/>


      
    </>
  )
};

export default GiveHelp;
