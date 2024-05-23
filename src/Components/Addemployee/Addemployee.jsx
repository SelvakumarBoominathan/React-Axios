
import React, { useState } from 'react';
import ".Addemployee.css";

const Addemployee = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(userData);
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
    <div>
      <h2>User Details</h2>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default Addemployee;
