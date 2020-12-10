import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Movies() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchListBook() {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        setList(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchListBook();
  }, []);

  return (
    <div>
      <h2>Ironhack Cinema</h2>
      <h3>Click on the movie to check the showtimes!</h3>
      <div style={{ display: "flex" }}>
        {list.map((element, idx) => {
          return (
            <div
              key={idx}
              style={{
                margin: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={element.image} />
              <h6>{element.title}</h6>
              <Link to={`/movies/${element._id}`}>See more </Link>
            </div>
          );
        })}
      </div>
      <button>
        <Link to="/movies/new">Add a Movie</Link>
      </button>
    </div>
  );
}

export default Movies;
