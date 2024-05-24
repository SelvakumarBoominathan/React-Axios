
import React, { useState } from 'react';
import "./Add-Del-employee.css";
import { useNavigate} from 'react-router-dom';

const Addemployee = () => {

const navigate = useNavigate();

//to implement Link functionality to a button
const handleClick = () => {
  window.location.href = "/";
}

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    country: '',
    age: '',
    picture: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData(prevData => ({
      ...prevData,
      picture: file
    }));
  };

const addEmployee = async (empData)=>{
  await createEmployee ();
  navigate("/")
}


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    addEmployee()
    // Reset form after submission
    setUserData({
      userName: '',
      email: '',
      country: '',
      age: '',
      picture: null
    });
  };

  return (
    <div className="user-details-container">
      <h2>Update User Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="userName" value={userData.userName} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={userData.country} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={userData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Picture:</label>
          <input type="file" name="picture" onChange={handleFileChange} />
        </div>
        <button id="Home-Link" onClick={handleClick} >Home</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default Addemployee;
