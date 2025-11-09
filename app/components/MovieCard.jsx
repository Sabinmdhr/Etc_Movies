import React from "react";
import "./MovieCard.css";
import Link from "next/link";
const MovieCard = ({ movie }) => {
  if (!movie) return null; // 🛡️ Prevent crash if movie is undefined

  const title = movie.title || movie.name;
  const date = movie.release_date || movie.first_air_date;
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
          <div className="movie-title">{title}</div>
          <span className="release-date">{date?.split("-")[0]}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
