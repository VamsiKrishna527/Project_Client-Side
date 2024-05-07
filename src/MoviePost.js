import React, { useState } from "react";
import axios from "axios";
//import GetData1Component from "./Get1";
// import GetData1Component from  "./Get1";


function CreateMovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    rating: "",
    actor_id: "",
  });
  // const [actors, setActors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/movies/create/",
        formData
      );
      
      console.log("Data saved successfully:", response.data);
      setSuccessMessage("Posting the data is successful");
      setErrorMessage("");
      setFormData({
        title: "",
        genre: "",
        rating: "",
        actor_id: "",
      });
    } catch (error) {

      console.error("Error saving data:", error);
      setErrorMessage("Data Post failed. Please try again.");
      setSuccessMessage("");

    }
  };

  return (
    <div>
      <h2>Add Book</h2>

      {/* <GetData1Component/> */}
      <div>{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
        
          <label>Actor ID:</label>
          <input
            type="number"
            name="actor_id"
            value={formData.actor_id}
            onChange={handleChange}
          />
        
        </div>
        
        <button type="submit">Save Book</button>
      </form>
      </div>
    </div>
  );
}

export default CreateMovieForm;
