// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import { useEffect, useState } from 'react';
import { readAllData, deleteEmployee} from "./Components/CRUD-ops.js";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
const [data, setData] = useState([]);



//READ
const fetchData = async() =>{
  try {
    const response = await readAllData();
    setData(response.data)
  } catch (error) {
    console.error('Error message: ', error)
  }
}

//DELETE
const removeEmp = async(empID) => {
  try {
    await deleteEmployee(empID);
    setData(data.filter((emp) => emp.id !==empID))
  } catch (error) {
    console.error('Error message: ', error)
  }
}




useEffect(()=>{
  fetchData();
}, [])



  return (
//Added router. Home page will have both header and Content component

    <Router>
      <Routes>
        <Route index element = {
        <>
        <Header/>
        <Content Data={data} onDelete={removeEmp} onEdit={/*updateEmp*/ null} />
        </>
      }></Route>
        <Route  path="/addmployee"  element={<h2>Add Employee</h2>}></Route>
      </Routes>
    </Router>
   
  )
}

export default App;
