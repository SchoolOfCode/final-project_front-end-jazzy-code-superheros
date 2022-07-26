import {useState} from 'react'

import './style.css'


export const Nav = ()=> {

  const [isActive, setIsActive] = useState(`false`)

  const handleToggle = ()=> {
    setIsActive(!isActive)
  }

  return (

    <div id='outerNavDiv' className='?'>

      <div id='innerNavDiv' className='?'>

        <nav id='navBar'>

          <div>

            <span>
              Logo PlaceHolder
            </span>

          </div>

          <a href='#' className = 'toggleButton' onClick={handleToggle}> 
          
            <span className='bar'/>

            <span className='bar'/>

            <span className='bar'/>

          </a>

          <div id='navLinks' className={isActive ? `active` : null}>

            <ul>

              <li>Home</li>

              <li>Get Help</li>

              <li>Give Help</li>

              <li>FAQ</li>

              <li>Contact Us</li>

            </ul>

          </div>

        </nav>

      </div>

    </div>
  )
}