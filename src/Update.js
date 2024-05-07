import React, { useState} from "react";

const MovieUpdate = () => {
  const [formData, setFormData] = useState({
    movie_name: "",
    actor_id: "",
    new_movie_data: {
      title: "",
      genre: "",
      rating: "",
      release_date: "",
      budget: "",
      collections: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      new_movie_data: {
        ...formData.new_movie_data,
        [e.target.name]: e.target.value,
      },
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/movies/update/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      // Optionally, you can handle the successful update response here
      const data = await response.json();
      console.log("Update successful", data);
    } catch (error) {
      console.error("Update failed:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie_name"
        placeholder="Book Name"
        value={formData.movie_name}
        onChange={(e) => setFormData({ ...formData, movie_name: e.target.value })}
        
      />
      <input
        type="text"
        name="actor_id"
        placeholder="Author ID"
        value={formData.actor_id}
        onChange={(e) => setFormData({ ...formData, actor_id: e.target.value })}
        
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.new_movie_data.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.new_movie_data.genre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="rating"
        placeholder="Rating"
        value={formData.new_movie_data.rating}
        onChange={handleChange}
      />
      <input
        type="text"
        name="release_date"
        placeholder="Release Date"
        value={formData.new_movie_data.release_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="budget"
        placeholder="Budget"
        value={formData.new_movie_data.budget}
        onChange={handleChange}
      />
      <input
        type="text"
        name="collections"
        placeholder="Collections"
        value={formData.new_movie_data.collections}
        onChange={handleChange}
      />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default MovieUpdate;
