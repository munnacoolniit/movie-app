import { create } from "zustand";

export type Movie = {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
};

type Genres = {
    id: number,
    name: string
}

export type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
    genres: Genres[];
    runtime: number;
    vote_count: number;
};

export interface Cast {
    id: number;
    name: string;
    character: string;
    profile_path: string;
    known_for_department: string;
}

export interface Reviews {
    id: string;
    author: string;
    content: string;
}

type MovieValue = {
  movies: Movie[];
  type: string;
  movie: MovieDetails;
  casts: Cast[];
  favs: number[];
  reviews: Reviews[];
  error: string;
};

type MovieActions = {
  setMovies: (movies: Movie[], type?: string) => void;
  setMovieDetails: (movie: MovieDetails) => void;
  setCast: (casts: Cast[]) => void;
  setFavs: (favs: number[]) => void;
  setReviews: (reviews: Reviews[]) => void;
  setError: (error: string)=> void;
};

export const useMovieStore = create<MovieValue & MovieActions>((set) => ({
  movies: [],
  movie: {
    id: 0,
    title: "",
    overview: "",
    release_date: "",
    poster_path: "",
    vote_average: 0,
    genres: [],
    runtime: 0,
    vote_count: 0,
  } ,
  type: '',
  casts: [],
  favs: [],
  reviews: [],
  error: '',
  setMovies: (movies, type='Popular Movies') => {
    set(() => ({ movies, type }));
  },

  setMovieDetails: (movie: MovieDetails) => {
    set(() => ({ movie }));
  },

  setCast: (casts: Cast[]) => {
    set(() => ({ casts }));
  },

  setReviews: (reviews: Reviews[]) => {
    set(() => ({ reviews }));
  },

  setFavs: (favs: number[]) => {
    set(() => ({ favs }));
  },

  setError: (error: string) => {
    set(() => ({ error }));
  },

}));