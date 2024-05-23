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
      <button onClick={navigatetoAddition} id='add-button'>Add New</button>
      
    </div>
  )
}

export default Header;
