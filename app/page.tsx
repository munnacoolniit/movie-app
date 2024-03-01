"use client";

import PopularMovies from "../components/PopularMovies";
import { useMovieStore } from '@/store/movie';
import { useEffect } from 'react';
import Search from '@/components/Search';
import { getMovies } from '@/utils/api';


export default function Home() {
  const setMovies = useMovieStore((state) => state.setMovies);
  const movies = async () => {
    setMovies(await getMovies('discover'))
  }

  useEffect(()=>{
    movies();
  },[])

 
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className='flex justify-center'>
          <Search placeholder="Search for Movies" />
        </div>
        <PopularMovies />
      </div>
    </main>
  );
}
