import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/config";
import { Movie } from "@/store/movie";
// import { shimmer, toBase64 } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const MovieCard = ({ movie }: { movie: Movie }) => {

    const dateString = movie?.release_date;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const formattedDate = `${day} ${month} ${year}`;

  return (
    <div className="bg-white rounded-md w-full flex flex-col overflow-hidden">
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
          // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
          // placeholder="blur"
        />
        
      </div>
      </Link>
      <div className="flex-row space-y-1 justify-between items-center bg-red px-[8px] py-[8px]">
        <h2 className="text-lg font-bold text-slate-700 truncate">{movie?.title}</h2>
          <div className="text-[14px] text-slate-500">{formattedDate}</div>
          <p className="line-clamp-2 text-slate-600">{movie?.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
