import React, { useState } from "react";
import axios from "axios";

import InputForm from "./InputForm";

function NewMovie(props) {
  const [state, setState] = useState({
    image: "",
    title: "",
    director: "",
    description: "",
    stars: "",
    showtimes: "",
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/movies/new", state);

      props.history.push("/movies");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Title:"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
        <InputForm
          label="Director:"
          name="director"
          value={state.director}
          onChange={handleChange}
        />
        <InputForm
          label="Description:"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <InputForm
          label="Image:"
          name="image"
          value={state.image}
          onChange={handleChange}
        />
        <InputForm
          label="Stars:"
          name="stars"
          value={state.stars}
          onChange={handleChange}
        />
        <InputForm
          label="Showtimes:"
          name="showtimes"
          value={state.showtimes}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewMovie;
