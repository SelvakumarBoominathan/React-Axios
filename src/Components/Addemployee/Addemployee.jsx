import React, { useState } from 'react';
import "./Add-Del-employee.css";
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee} from '../CRUD-ops';

const Addemployee = () => {

const { id } = useParams();

const navigation = useNavigate();


//handle click to return Home page
const handleClick = () => {
  navigation("/");
}


  const [user, setUser] = useState({
    id : id,
    userName: '',
    email: '',
    country: '',
    age: '',
    picture: ''
  });

  // const [user, setUser] = useState([...user]);

  //to implement 'Link' functionality to a button


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };


// const addEmployee = async (empData)=>{
//   await createEmployee (empData);
//   navigate("/")
// }


  const handleSubmit = (e) => {

    e.preventDefault();

    // Reset form after submission
    setUser(() => ({
      ...user,
      userName: e.target.userName.value,
      email: e.target.email.value,
      country: e.target.country.value,
      age: parseInt(e.target.age.value),
      picture: e.target.picture.value,
      // id: parseInt(e.target.id)
    }));
    // Handle form submission
    createEmployee(user)
    .then(()=> navigation("/"))
    .catch(err => console.log(err))
    ;
  };


  return (
    <div className="user-details-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName:</label>
          <input type="text" name="userName" value={user.userName} onChange={handleChange} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={user.country} onChange={handleChange} required/>
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={user.age} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor='picture'>Picture:</label>
          <input type="text" name="picture" value={user.picture} onChange={handleChange} required/>
        </div>
        <button id="Home-Link" type="button" onClick={handleClick} >Home</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default Addemployee;
