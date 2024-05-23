import React from 'react';
import "./Content.css";
import { useNavigate } from 'react-router-dom';

const Content = ({Data, onEdit, onDelete}) => {



  const navigate = useNavigate()
const navigatetoAddition = () => {
  navigate("/add-employee")
}


  // to check if the fetched data is valid in UI
  if (!Data) {
    return <div>Loading...</div>;
  }

  return (

    <>
     <div className='btn-container'>
      <button onClick={navigatetoAddition} id='add-button'>Add New</button>
      </div>

      <div className='Parent-content-container'>

     
      

    {/* Map function to pass the individual details of an employee from data array */}
      {Data.map((emp, index) => (
  <div className="card" key={index}>
  
      <img src={emp.Picture} alt="User" className="card-image" />
      <div className="card-details">
        <h2>{emp.UserName}</h2>
        <p>Email: {emp.Email}</p>
        <p>Country: {emp.Country}</p>
        <p>Age: {emp.Age}</p>
      </div>
      
      <div className="card-buttons">
        <button onClick={() => onEdit(emp.id)} className="edit-button">Edit</button>
        <button onClick={() => onDelete(emp.id)} className="delete-button">Delete</button>
      </div>
    
    </div>
    ))}
    </div>
    </>
    
  )
}

export default Content;
