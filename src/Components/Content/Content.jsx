import React from 'react';
import "./Content.css"

const Content = ({Data, onEdit, onDelete}) => {

  return (
    <div className='Parent-content-container'>
      {Data.map((Emp, index) => (
  <div className="card" key={index}>
  
      <img src={Emp.image} alt="User" className="card-image" />
      <div className="card-details">
        <h2>{Emp.username}</h2>
        <p>Email: {Emp.email}</p>
        <p>Country: {Emp.country}</p>
        <p>Age: {Emp.age}</p>
      </div>
      
      <div className="card-buttons">
        <button onClick={onEdit} className="edit-button">Edit</button>
        <button onClick={onDelete} className="delete-button">Delete</button>
      </div>
    
    </div>
    ))}
    </div>
  )
}

export default Content;
