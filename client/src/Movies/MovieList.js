import React from 'react';

export default function MovieList(props) {
  // This component is expecting props from App.js, name your prop "movies"
  const { movies } = props


  return (
    <div className="movie-list">
      {/*  Use Link from React Router Dom to make each movie clickable */}
      {movies.map(movie => (
        <div className="movie-card"> 
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
        </div>


      ))}
    </div>
  );
}

