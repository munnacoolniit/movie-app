import useDebounce from "@/hooks/useDebounce";
import { useMovieStore } from "@/store/movie";
import { getMovies, searchMovies } from "@/utils/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useEffect, useState } from "react";

type propsType = {
    placeholder: string;
}

const Search = ({placeholder}: propsType) => {
  const setMovies = useMovieStore((state) => state.setMovies);
  const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target?.value);
    };


    useEffect(()=>{
      (async ()=> {
        if(debouncedSearchTerm) {
         const resp = await searchMovies('search', debouncedSearchTerm)
         setMovies(resp, 'Search Movies')
        } else{
          setMovies(await getMovies('discover'))
        }
      })()
    }, [debouncedSearchTerm])

    

  return (
    <div className="w-96 flex items-center bg-white p-2 rounded-full">
        <MagnifyingGlassIcon className="w-6 h-6 ml-2 text-gray-500" />
        <input type="search" onChange={handleChange} placeholder={placeholder} className="w-full px-4 py-2 rounded-sm outline-none"/>
    </div>
  );
};

export default Search;
