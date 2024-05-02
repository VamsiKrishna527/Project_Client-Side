import React, { useState } from "react";
import axios from "axios";
import GetData1Component from "./Get1";
// import GetData1Component from  "./Get1";


function CreateMovieForm() {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    rating: "",
    actor_id: "",
  });
  // const [actors, setActors] = useState([]);

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
      // Handle success response
      console.log("Data saved successfully:", response.data);
      // Optionally, reset form fields after successful submission
      setFormData({
        title: "",
        genre: "",
        rating: "",
        actor_id: "",
      });
    } catch (error) {
      // Handle error
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <h2>Add Book</h2>
      {/* <GetData1Component setActors={setActors} /> */}
      <GetData1Component/>
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
  );
}

export default CreateMovieForm;
