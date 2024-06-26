import React, { useEffect, useState } from 'react';
import "./Content.css";
import { Link } from 'react-router-dom';

const Content = ({Data, onDelete}) => {

const [forceReload, setForceReload] = useState(false);

// to trigger rerender whenever the changes happen
useEffect(() => {
  setForceReload(PrevData => !PrevData);
}, [Data])


  // to check if the fetched data is valid in UI
  if (!Data) {
    return <div>Loading...</div>;
  }

  return (

    <>

    {/*Link to new page*/}
     <div className='btn-container'>
      <Link id='add-button' to={'/add-employee'} >Add New</Link>
      </div>

      <div className='Parent-content-container'>

    {/* Map function to pass the individual details of an employee from data array */}
      {Data.map((emp, index) => (
  <div className="card" key={index}>
  
      <img src={emp.picture} alt="User" className="card-image" />
      <div className="card-details">
        <p>User : {emp.userName}</p>
        <p>Email: {emp.email}</p>
        <p>Country: {emp.country}</p>
        <p>Age: {emp.age}</p>
      </div>
      
      <div className="card-buttons">
        <Link key={index} to = {`/update-employee/${emp.id.toString()}`} className="edit-button">Edit</Link>
        <button onClick={() => onDelete(emp.id)} className="delete-button">Delete</button>
      </div>
    
    </div>
    ))}
    </div>
    </>
    
  )
}

export default Content;
