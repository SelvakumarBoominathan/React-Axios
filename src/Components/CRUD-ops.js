import axios from 'axios';

const url = "https://664b818e35bbda10987d2f52.mockapi.io/Employee";



//READ Operation using Axios

const readAllData = async () => {

  const data = await axios.get(url);
  return data;
}




//DELETE

const deleteEmployee = async (empID) => {
const data = await axios.delete(`${url}/${empID}`)

return data;
}


//POST

const createEmployee = async (empDetails) => {
  const data = await axios.post(empDetails)  
  return data;
  }



// PUT or UPDATE
// const updateEmployee = async (empID) => {
//   const data = await axios.put(`${url}/${empID}`)

//   return data;
//   }





export { readAllData, deleteEmployee, createEmployee };