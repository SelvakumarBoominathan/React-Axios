import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


const Header = () => {

const navigate = useNavigate()
const navigatetoAddition = () => {
  navigate("/add-employee")

}

  return (
    <div className='Heading'>
      <h1>EMPLOYEE DETAILS</h1>
      <button onClick={navigatetoAddition}  style = {{fontSize : '18px', float : 'right'}}>Add New</button>
      
    </div>
  )
}

export default Header;
