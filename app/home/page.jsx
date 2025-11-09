"use client";

import React from "react";
import "./style.css";
import {
  getPopularMovies,
  searchMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
} from "../servixes/api";
import { useState, useEffect } from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    const loadTopRatedMovies = async () => {
      try {
        const topRatedMovies = await getTopRatedMovies();
        setTopRatedMovies(topRatedMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };

    const loadLatestMovies = async () => {
      try {
        const latestMovies = await getNowPlayingMovies();
        setLatestMovies(latestMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
    loadLatestMovies();
    loadTopRatedMovies();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };
  return (
    <div>
      {/* ------------------home------------- */}
      <div id="home">
        <div className="banner">
          <span>Most Popular</span>
          <div className="slider" style={{ "--quantity": 7 }}>
            {movies.slice(0, 7).map((movie, index) => (
              <div
                className="item"
                style={{ "--position": index + 1 }}
                key={movie.id}
              >
                <MovieCard movie={movie} key={movie.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -----------movies------  */}
      <div id="movie">
        {/* ---------------------------------------Latest Movies---------------------------------- */}
        <div className="latest-movies">
          <div className="heading">
            <h1>Latest Movies</h1>
            <button>See More</button>
          </div>
          <div className="movie-grid">
            {latestMovies.slice(0, 16).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <div className="latest-movies">
          <div className="heading">
            <h1>Top Rated Movies</h1>
            <button>See More</button>
          </div>
          <div className="movie-grid">
            {topRatedMovies.slice(0, 16).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <div className="tv-series"></div>
    </div>
  );
};

export default Home;
