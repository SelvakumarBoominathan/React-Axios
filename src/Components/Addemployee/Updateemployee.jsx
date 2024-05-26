import React, { useEffect, useState } from 'react';
import "./Add-Del-employee.css";
import { useNavigate} from 'react-router-dom';
import {readAllData, updateEmployee} from "../CRUD-ops.js";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Addemployee = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  const [userData, setUserData] = useState({
    id : id,
    userName: '',
    email: '',
    country: '',
    age: '',
    picture: ''
  });


  //setting userData values inside useEffect
useEffect(() => {
  readAllData()
    .then((res) => {
      const employee = res.data.find((singleEmployee) => parseInt(singleEmployee.id) === parseInt(id));
      if (employee) {
      setUserData({
        id: parseInt(employee.id),
        userName: employee.UserName,
        email: employee.Email,
        country: employee.Country,
        age: employee.Age,
        picture: employee.Picture
      });
    }})
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

    }, [id]);


// common handle Update functionalities
    const handleUpdate = (e) => {
      //Destructuring e.target's values of name and value
      const {name, value} = e.target;
      setUserData((prevData) => ({
        ...prevData,
        [name] : value

      }))}

  //handle submit function to update the component
  //   const handleSubmit= (e) => {
  //     e.preventDefault();
  //     axios.put('https://664b818e35bbda10987d2f52.mockapi.io/Employee'+id, setUserData())
  //     // updateEmployee(id, userData)
  //     .then((res) => {
  //         navigate("/");
  //       })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateValue = () => {return setUserData()};
    
    axios.put(`https://664b818e35bbda10987d2f52.mockapi.io/Employee/${id}`, 
    
    setUserData({
      id: parseInt(e.target.value.id),
      userName: e.target.value.UserName,
      email: e.target.value.Email,
      country: e.target.value.Country,
      age: e.target.value.Age,
      picture: e.target.value.Picture 

    }))
      .then((res) => {
        
        navigate("/");
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };



  return (
    <div className="user-details-container">
      <h2>Update User Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='UserName'>Username:</label>
          <input type="text" name="userName" placeholder='UserName' value={userData.userName} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='Email'>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='Country'>Country:</label>
          <input type="text" name="country" value={userData.country} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='Age'>Age:</label>
          <input type="number" name="age" value={userData.age} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='Picture'>Picture:</label>
          <input type="string" name="picture" value={userData.picture} onChange={handleUpdate}/>
        </div>
        <button id="Home-Link" type="button" onClick={handleClick}> Home </button> 
        <button type="submit">Update</button>
      </form>
    </div>
  );
};



export default Addemployee;
