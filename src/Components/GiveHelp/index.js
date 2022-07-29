import {List} from '../List'
import ToggleCardKids from '../GetHelp/ToggleCardChildren'

import './style.css'

const GiveHelp = ({foodBankData}) => {

  return (
    <>
      <h1>Give Help Body</h1>

      <ToggleCardKids cardTitle='Donate Your Money' cardBody='Placeholder for Donate Money Button'/>

      <ToggleCardKids cardTitle='Donate Items'>
        <List foodBankData={foodBankData}/>
      </ToggleCardKids>

      <ToggleCardKids cardTitle='Donate Your Time' cardBody='Placeholder for form'/>


      
    </>
  )
};

export default GiveHelp;
