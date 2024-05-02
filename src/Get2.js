import React, { useState, useEffect } from 'react';

function GetData2Component() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/movies/');
        const responseData = await response.json();
        setMovies(responseData);
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
      <h2>Books:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.title}>
            <strong>Name:</strong> {movie.title}, <strong>Genre:</strong> {movie.genre}, <strong>Rating:</strong> {movie.rating}, <strong>Release Date:</strong> {movie.release_date}, <strong>Budget:</strong> {movie.budget}, <strong>Collections:</strong> {movie.collections}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetData2Component;
