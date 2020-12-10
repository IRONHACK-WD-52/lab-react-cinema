import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function MovieDetail(props) {
  const { id } = props.match.params;
  const [movies, setMovies] = useState({
    title: "",
    director: "",
    stars: [],
    image: "",
    description: "",
    showtimes: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/movies/${id}`
        );
        console.log(response.data);
        setMovies(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [id]);

  const { stars, showtimes } = movies;

  return (
    <div>
      <img src={movies.image} alt="img" />
      <div>
        <Link to={"/movies"}>Go Back </Link>
        <h6>{movies.title}</h6>
        <h6>
          <strong>Director:</strong>
          {movies.director}
        </h6>
        <ul>
          {stars.map((stars, idx) => {
            return <li key={idx}>{stars}</li>;
          })}
        </ul>
        <div>{movies.description}</div>
        {showtimes.map((show, idx) => {
          return <li key={idx}>{show}</li>;
        })}
      </div>
    </div>
  );
}

export default MovieDetail;
