// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import { useEffect,useState } from 'react';
import { readAllData } from "./Components/CRUD-ops.js"

function App() {
const [data, setData] = useState([]);

useEffect(()=>{

  const fetchData = async() =>{
    try {
      const response = await readAllData();
      setData(response)
    } catch (error) {
      console.error('Error message: ', error)
    }
  }

  fetchData();
}, [])


  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  return (
    <div>
      <Header/>
      <Content Data={data} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  )
}

export default App;
