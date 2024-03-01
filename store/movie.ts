import { create } from "zustand";

export type Movie = {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
};

type MovieValue = {
  movies: Movie[];
  type: string;
};

type MovieActions = {
  setMovies: (movies: Movie[], type?: string) => void;
};

export const useMovieStore = create<MovieValue & MovieActions>((set) => ({
  movies: [],
  type: '',
  setMovies: (movies, type='Popular Movies') => {
    set(() => ({ movies, type }));
  },
}));