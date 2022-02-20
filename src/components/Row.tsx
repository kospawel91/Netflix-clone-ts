import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.scss";

type RowProps = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};
const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie: any) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
