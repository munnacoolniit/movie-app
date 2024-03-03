import React from "react";
import MovieCard from "./MovieCard";
import { Movie, useMovieStore } from "@/store/movie";

const PopularMovies = () => {
  const movies = useMovieStore((state) => state.movies);
  const moviesType = useMovieStore((state) => state.type);

  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">{moviesType}</h1>
      </div>
      <div className="grid grid-row-1 lg:grid-cols-4 md:grid-cols-2 mt-4 gap-8">
        {movies?.map((movie: Movie) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
