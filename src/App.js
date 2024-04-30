// //import React, { useEffect } from "react";
// import Home from "./Home";
// import GetDataComponent from "./Get1";
// import GetData2Component from "./Get2";
// //import axios from "axios";

// function App(){

//   return (
//     <div>
//       <Home/>
//       <GetDataComponent/>
//       <GetData2Component/>
//     </div>
    
//   );
// }
// export default App;


import React, { useState } from "react";
import Home from "./Home";
import GetDataComponent from "./Get1";
import GetData2Component from "./Get2";
import CreateMovieForm from "./MoviePost";
function App() {
  const [showGetData, setShowGetData] = useState(false);
  const [showGetData2, setShowGetData2] = useState(false);
  const [showPostMovie, setShowPostMovie] = useState(false);
  
  const toggleGetData = () => {
    setShowGetData(!showGetData);
    // Ensure that when GetDataComponent is shown, GetData2Component is hidden
    if (!showGetData) {
      setShowGetData2(false);
      setShowPostMovie(false);
    }
  };

  const toggleGetData2 = () => {
    setShowGetData2(!showGetData2);
    // Ensure that when GetData2Component is shown, GetDataComponent is hidden
    if (!showGetData2) {
      setShowGetData(false);
      setShowPostMovie(false);
    }
  };

  const togglePostData = () => {
    setShowPostMovie(!showPostMovie);
    if (showPostMovie) {
      setShowGetData(false); // Hide GetDataComponent when showing create movie form
      setShowGetData2(false); // Hide GetData2Component when showing create movie form
    }
  };

  return (
    <div>
      <Home />
      <button onClick={toggleGetData}>Actors Component</button>
      <button onClick={toggleGetData2}>Movies Component</button>
      <button onClick={togglePostData}>Post Movies</button>
      {showGetData && <GetDataComponent />}
      {showGetData2 && <GetData2Component />}
      {showPostMovie && <CreateMovieForm />}
    </div>
  );
}

export default App;

