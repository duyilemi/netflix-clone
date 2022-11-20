import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

function Banner() {
  const shorten = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " ....." : str;
  };
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchMovies();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__desc">{shorten(movie?.overview, 129)}</h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
