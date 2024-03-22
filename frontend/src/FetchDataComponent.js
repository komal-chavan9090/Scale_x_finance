// src/components/FetchDataComponent.js
import React, { useState } from 'react';
import axios from 'axios';


const FetchDataComponent = () => {
  const [tokenId, setTokenId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchTokenData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/data/${tokenId}`);
      setData(response.data);
    } catch (error) {
      setError('Error fetching data');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>Fetch Token Data</h2>
      <div>
        <input 
          type="text" 
          value={tokenId} 
          onChange={(e) => setTokenId(e.target.value)} 
          placeholder="Enter Token ID" 
        />
        <button onClick={fetchTokenData}>Fetch Data</button>
      </div>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h3>Token ID: {data.tokenId}</h3>
          <p>Price: {data.price}</p>
          <p>Volume: {data.volume}</p>
        </div>
      )}
    </div>
  );
};

export default FetchDataComponent;
