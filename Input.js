import React from 'react'
import "./Input.css"
import Button from './Button'
import{BsEnvelope, BsTelegram} from "react-icons/bs"

const Input = () => {
  return (
    < >
    <div className='gate'>
        <BsTelegram className='pool'/>
    <h2> Subscribe to get important information,latest News and other <br></br>interesting offers and about jadoo</h2>
    
    <BsEnvelope className='door'/><input type="Email" name="" id="" required placeholder="Your Email"></input><Button text="Subscribe"/>
    </div>
    </>
  )
}

export default Input