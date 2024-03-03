import { IMAGE_URL } from "@/config";
import { Movie, useMovieStore } from "@/store/movie";
import {
  EMPTY_MOVIE_URL,
  getFavoriteMovies,
  getFormattedDate,
  setFavoriteMovies,
} from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const formattedDate = getFormattedDate(movie?.release_date);
  const setFavsMovies = useMovieStore((state) => state.setFavs);
  const favs = useMovieStore((state) => state.favs);

  const handleAddToFavMovie = (movieId: number) => {
    const favorites = getFavoriteMovies();
    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      setFavoriteMovies(favorites);
      setFavsMovies(favorites);
    } else {
      handleRemoveFromFavMovie(movieId);
    }
  };

  const handleRemoveFromFavMovie = (movieId: number) => {
    let favorites = getFavoriteMovies();
    favorites = favorites.filter((id: number) => id !== movieId);
    setFavoriteMovies(favorites);
    setFavsMovies(favorites);
  };

  return (
    <div className="bg-white rounded-md w-full flex flex-col overflow-hidden shadow-md">
      <Link href={`/movie/${movie?.id}`}>
        <div className="w-full h-[400px] relative overflow-hidden">
          <Image
            src={
              movie?.poster_path
                ? `${IMAGE_URL}${movie?.poster_path}`
                : `${EMPTY_MOVIE_URL}`
            }
            alt={movie?.title}
            fill={true}
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      <div className="flex-row space-y-1 justify-between items-center bg-red p-[16px]">
        <div className="flex justify-between items-center gap-1">
          <h2 className="text-lg font-bold text-slate-700 truncate">
            {movie?.title}
          </h2>
          <span
            className="cursor-pointer"
            onClick={() => handleAddToFavMovie(movie?.id)}
          >
            <HeartIcon
              className="w-6 h-6 ml-2 text-[#f84464]"
              fill={favs.includes(movie?.id) ? "#f84464" : "none"}
            />
          </span>
        </div>
        {formattedDate && (
          <div className="text-[13px] text-slate-500">{formattedDate}</div>
        )}
        <p className="line-clamp-2 text-[#666666] text-[14px] font-medium">
          {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
