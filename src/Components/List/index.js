import {ListItem} from '../ListItem'
import './style.css'

export const List = ({foodBankData}) => {

  const itemsNeeded = foodBankData ? foodBankData.need.needs.split(`\n`) : []

  //dev feedback only - remove
  console.log(itemsNeeded)

  return (
    <section className = {foodBankData ? `itemsNeededList` : null}>
      <ul>
        
          {itemsNeeded.map((item, index)=> {
            return <ListItem 
              listItemText={item}
              key={index}  
              />}
          )}
          
      </ul>
    </section>
  )

}