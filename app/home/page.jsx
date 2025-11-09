"use client";

import React from "react";
import "./style.css";
import {
  getPopularMovies,
  searchMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularTv,
  getTrending,
} from "../services/api";
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
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularTv, setPopularTv] = useState([]);
  const [trending, setTrending] = useState([]);
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
    const loadUpcomingMovies = async () => {
      try {
        const upcomingMovies = await getUpcomingMovies();
        setUpcomingMovies(upcomingMovies);
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
    // ------------------------------Tv Shows---------------------
    const loadPopularTv = async () => {
      try {
        const popularTv = await getPopularTv();
        setPopularTv(popularTv);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
        setError("Failed to load popular movies.");
      } finally {
        setLoading(false);
      }
    };
    const loadTrending = async () => {
      try {
        const trending = await getTrending();
        setTrending(trending);
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
    loadUpcomingMovies();

    // ----------------------Tv Shows----------------------

    loadPopularTv();
    loadTrending();
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
        <div className="Upcoming-movies">
          <div className="heading">
            <h1>Upcoming Movies</h1>
            <button>See More</button>
          </div>
          <div className="movie-grid">
            {upcomingMovies.slice(0, 16).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <div id="tv-series">
        <div className="popular-tv-series">
          <div className="heading">
            <h1>Popular Tv Shows</h1>
            <button>See More</button>
          </div>
          <div className="movie-grid">
            {popularTv.slice(0, 16).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        <div className="Trending">
          <div className="heading">
            <h1>Trending</h1>
            <button>See More</button>
          </div>
          <div className="movie-grid">
            {trending.slice(0, 16).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
