import React, { useState } from "react";

const MovieDelete = () => {
  const [formData, setFormData] = useState({
    movie_name: "",
    actor_id: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/movies/delete/", {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Deletion failed");
  //     }

  //     // Optionally, you can handle the successful deletion response here
  //     const data = await response.json();
  //     console.log("Deletion successful", data);
  //   } catch (error) {
  //     console.error("Deletion failed:", error.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { movie_name, actor_id } = formData;
  
      const response = await fetch("http://127.0.0.1:8000/movies/delete/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie_name, actor_id }),
      });
  
      if (!response.ok) {
        throw new Error("Deletion failed");
      }
      setSuccessMessage("Movie deleted successfully");
      setErrorMessage("");
      setFormData({
        movie_name: "",
        actor_id: "",
      });
      console.log("Deletion successful");
    } catch (error) {
      console.error("Deletion failed:", error.message);
      setErrorMessage("Deletion failed. Please try again.");
      setSuccessMessage("");
    }
  };
  
  
  
  return (
    <div>{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie_name"
        placeholder="Book Name"
        value={formData.movie_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="actor_id"
        placeholder="Author ID"
        value={formData.actor_id}
        onChange={handleChange}
      />
      <button type="submit">Delete Book</button>
    </form>
    </div>
  );
};

export default MovieDelete;
