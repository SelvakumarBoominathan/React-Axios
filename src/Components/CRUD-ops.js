import axios from 'axios';

const url = "https://664b818e35bbda10987d2f52.mockapi.io/Employee";


const readAllData = async () => {

  const data = await axios.get(url);

  // const data = await response.json();

  return data;
}

export { readAllData };