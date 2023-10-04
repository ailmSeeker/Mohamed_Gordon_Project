// Example Home.js component
import React, { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Flask API
    fetch('/api/home')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Data from Flask API: {data.message}</p>
    </div>
  );
}

export default Home;
