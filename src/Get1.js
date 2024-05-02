import React, { useState, useEffect } from 'react';


function GetData1Component() {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/actors/');
        const responseData = await response.json();
        setActors(responseData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2>Authors:</h2>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <strong>Name:</strong> {actor.name}, <strong>Age:</strong> {actor.age}, <strong>Nationality:</strong> {actor.nationality}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default GetData1Component;
