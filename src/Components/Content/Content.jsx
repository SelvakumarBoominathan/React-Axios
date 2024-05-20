import React from 'react';
import "./Content.css"

const Content = (props) => {
  
  //props deStructuring
  const {image, username, email, country, age, onEdit, onDelete } = props;

  return (
    <div className='Parent-content-container'>
  <div className="card">
      <img src={image} alt="User" className="card-image" />
      <div className="card-details">
        <h2>{username}</h2>
        <p>Email: {email}</p>
        <p>Country: {country}</p>
        <p>Age: {age}</p>
      </div>
      <div className="card-buttons">
        <button onClick={onEdit} className="edit-button">Edit</button>
        <button onClick={onDelete} className="delete-button">Delete</button>
      </div>
    </div>
      
    </div>
  )
}

export default Content;
