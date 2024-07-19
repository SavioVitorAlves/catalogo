// src/App.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Conectar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from PostgreSQL</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Conectar;
*/