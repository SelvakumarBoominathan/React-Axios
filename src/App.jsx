// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header.jsx";
import Content from "./Components/Content/Content.jsx";
import { useEffect,useState } from 'react';
import { readAllData, deleteEmployee, updateEmployee } from "./Components/CRUD-ops.js"

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

//UPDATE
// const updateEmp = async(empID) => {
//   try {
//     await updateEmployee(empID);
//     setData(data.filter((emp) => emp.id !==empID))
//   } catch (error) {
//     console.error('Error message: ', error)
//   }
// }



useEffect(()=>{
  fetchData();
}, [])



  return (
    <div>
      <Header/>
      <Content Data={data} onDelete={removeEmp} onEdit={/*updateEmp*/ null} />
    </div>
  )
}

export default App;
