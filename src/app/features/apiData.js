import { useEffect, useState } from "react";


function ApiFetch(){

const [rockets, setRockets] = useState([]);

useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch('https://api.spacexdata.com/v4/rockets');
       const data = await response.json();
       setRockets(data);
       console.log(data);
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

   fetchData();
}, []);

return {rockets}

}

export default ApiFetch;