import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/api')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

  return (
    <div className="App">
      <div className="App">
            <h1>Mensaje desde Express a través del proxy:</h1>
            <p>{message}</p>
      </div>
      
    </div>
  );
}

export default App;
