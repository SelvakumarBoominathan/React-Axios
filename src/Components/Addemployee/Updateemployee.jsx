import React, { useEffect, useState } from 'react';
import "./Add-Del-employee.css";
// import { useNavigate} from 'react-router-dom';
import {readAllData} from "../CRUD-ops.js";
import { useParams } from 'react-router-dom';


const Addemployee = () => {

  const {id} = useParams;


//to implement Link functionality to a button
const handleClick = () => {
  window.location.href = "/";
}

  const [userData, setUserData] = useState({
    id : id,
    userName: '',
    email: '',
    country: '',
    age: '',
    picture: ''
  });

  

useEffect(() =>{
  readAllData()
  .then((res)=>{  
    setUserData({...userData,
      id : res.data.id,
      userName : res.data.username,
      email: res.data.email,
      country: res.data.coutry,
      age: res.data.age,
      picture: res.data.picture
    })
  })
    }, [])


  return (
    <div className="user-details-container">
      <h2>Update User Details</h2>
      <form>
        <div>
          <label htmlFor='UserName'>Username:</label>
          <input type="text" name="userName" placeholder='UserName' value={userData.userName}/>
        </div>
        <div>
          <label htmlFor='Email'>Email:</label>
          <input type="email" name="email" value={userData.email}/>
        </div>
        <div>
          <label htmlFor='Country'>Country:</label>
          <input type="text" name="country" value={userData.country}/>
        </div>
        <div>
          <label htmlFor='Age'>Age:</label>
          <input type="number" name="age" value={userData.age}/>
        </div>
        <div>
          <label htmlFor='Picture'>Picture:</label>
          <input type="string" name="picture" value={userData.picture}/>
        </div>
        <button id="Home-Link" onClick={handleClick}> Home </button> 
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default Addemployee;
