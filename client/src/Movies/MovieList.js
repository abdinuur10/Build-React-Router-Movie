import React from 'react';
import {Link, Router, Switch } from "react-router-dom"

export default function MovieList(props) {
  // This component is expecting props from App.js, name your prop "movies"
  const { movies } = props


  return (
    <div className="movie-list">
      <nav>
        <h1 className="header">MovieList</h1>
        <div className="nav-links">
        </div>
      </nav>
      {/*  Use Link from React Router Dom to make each movie clickable */}
      {movies.map(movie => (
        <Link to={`/movieList/${movie.id}`}>
        <div className="movie-card"> 
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
        </div>

        </Link>

        

      ))}
    </div>
  );
}

