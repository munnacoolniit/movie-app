import { IMAGE_URL } from "@/config";
import { Cast } from "@/store/movie";
import { EMPTY_MOVIE_URL } from "@/utils";
import Image from "next/image";
import React from "react";

const CastCard = ({ cast }: { cast: Cast }) => {
  return (
    <div className="w-full flex flex-col  py-[16px]">
      <div className="relative w-[120px] h-[120px]">
        <Image
          src={
            cast?.profile_path
              ? `${IMAGE_URL}${cast?.profile_path}`
              : EMPTY_MOVIE_URL
          }
          alt={cast?.name}
          fill={true}
          className="rounded-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 mt-3 text-center">
        <h2 className="text-[14px] line-clamp-1">{cast?.name}</h2>
        <h2 className="text-sm text-slate-400">{cast?.known_for_department}</h2>
      </div>
    </div>
  );
};

export default CastCard;
