import React from "react";
import "./MovieCard.css";
import Link from "next/link";
const MovieCard = ({ movie }) => {
  if (!movie) return null; // 🛡️ Prevent crash if movie is undefined

  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="movie-card">
        <div className="movie-poster">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.jpg" // optional fallback
            }
            alt={movie.title || "Untitled"}
          />
        </div>
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <span className="release-date">
            {movie.release_date?.split("-")[0]}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
