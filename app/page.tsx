"use client";

import PopularMovies from "../components/PopularMovies";
import { useMovieStore } from "@/store/movie";
import { useEffect } from "react";
import Search from "@/components/Search";
import { getMovies } from "@/utils/api";
import { getFavoriteMovies } from "@/utils";

export default function Home() {
  const setMovies = useMovieStore((state) => state.setMovies);
  const setFavs = useMovieStore((state) => state.setFavs);

  const movies = async () => {
    setMovies(await getMovies("discover"));
  };

  const favorites = getFavoriteMovies();

  useEffect(() => {
    movies();
    if (favorites.length) {
      setFavs(favorites);
    }
  }, []);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto mb-12">
        <div className="flex justify-center ">
          <Search placeholder="Search for Movies" />
        </div>
        <PopularMovies />
      </div>
    </main>
  );
}
