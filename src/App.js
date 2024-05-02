import React, { useState } from "react";
import Home from "./Home";
import GetDataComponent from "./Get1";
import GetData2Component from "./Get2";
import CreateMovieForm from "./MoviePost";
import Login from "./Login";
import Register from "./Register";
import MovieUpdate from "./Update";
import MovieDelete from "./Delete"; // Import the new delete component

function App() {
  const [page, setPage] = useState('home'); // State to track the current page

  // Function to set the current page
  const setPageHandler = (pageName) => {
    setPage(pageName);
  };

  // Map of page components
  const pageComponents = {
    'home': <Home />,
    'login': <Login />,
    'register': <Register />,
    'authors': <GetDataComponent />,
    'books': <GetData2Component />,
    'post_books': <CreateMovieForm />,
    'update_books': <MovieUpdate />,
    'delete_books': <MovieDelete />,
  };

  return (
    <div>
      {Object.keys(pageComponents).map((pageName) => (
        <button key={pageName} onClick={() => setPageHandler(pageName)}>
          {pageName.replace('_', ' ').toUpperCase()}
        </button>
      ))}
      {pageComponents[page]}
    </div>
  );
}

export default App;
