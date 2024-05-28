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
  try {const response = await axios.post(url,empDetails)  
        return response.data;
    } catch{
    console.error('Error creating employee : ', error);
    throw error;
  }
  }



// PUT or UPDATE
const updateEmployee = async (empID, userData) => {
  const data = await axios.put(`${url}/${empID}`, userData)
  // const data = await axios.put({url}+ id, userData)
  return data;
  }





export { readAllData, deleteEmployee, createEmployee, updateEmployee };