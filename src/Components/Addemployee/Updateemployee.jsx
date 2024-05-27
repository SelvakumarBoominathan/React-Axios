import React, { useEffect, useState } from 'react';
import "./Add-Del-employee.css";
import { useNavigate} from 'react-router-dom';
import {readAllData, updateEmployee} from "../CRUD-ops.js";
import { useParams } from 'react-router-dom';


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
        userName: employee.userName,
        email: employee.email,
        country: employee.country,
        age: employee.age,
        picture: employee.picture
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =  {
      userName: e.target.userName.value,
      email: e.target.email.value,
      country: e.target.country.value,
      age: parseInt(e.target.age.value),
      picture: e.target.picture.value,
      // id: parseInt(e.target.id)
    }
    console.log(data);
    updateEmployee(id, data)
    
    // axios.put(`https://664b818e35bbda10987d2f52.mockapi.io/Employee/${id}`, data)
    
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
          <label htmlFor='userName'>Username:</label>
          <input type="text" name="userName" placeholder='userName' value={userData.userName} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <input type="text" name="country" value={userData.country} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='age'>Age:</label>
          <input type="number" name="age" value={userData.age} onChange={handleUpdate}/>
        </div>
        <div>
          <label htmlFor='picture'>Picture:</label>
          <input type="text" name="picture" value={userData.picture} onChange={handleUpdate}/>
        </div>
        <button id="Home-Link" type="button" onClick={handleClick}> Home </button> 
        <button type="submit">Update</button>
      </form>
    </div>
  );
};



export default Addemployee;
