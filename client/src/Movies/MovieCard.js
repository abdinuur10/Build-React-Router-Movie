import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"

export default function Movie(props) {
  const [movie, setMovie] = useState();
   
  let params = useParams()
  console.log("params", params)
  // Change ^^^ this line and use a useParams hook to obtain the :id parameter from the URL, make sure to import useParams from react-router-dom
 
  useEffect(() => {
    let id = Number(params.movieID)
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        console.log("moviecard",response)
        setMovie(response.data)
        // Study this response with a console log
        // and set the response data to the 'movie' state
        
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
