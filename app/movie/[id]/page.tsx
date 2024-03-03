"use client";

import CastCard from "@/components/CastCard";
import { IMAGE_URL } from "@/config";
import { Cast, Reviews, useMovieStore } from "@/store/movie";
import { EMPTY_MOVIE_URL, getFormattedDate, statusCodeMessage } from "@/utils";
import { fetchMovieCasts, fetchMovieDetails, fetchReviews } from "@/utils/api";
import Image from "next/image";
import { useEffect } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import ReviewCard from "@/components/ReviewCard";
import { AxiosError } from "axios";

interface IParamsMovieDetails {
  params: {
    id: string;
  };
}

export default function MovieDetails({ params }: IParamsMovieDetails) {
  const { id } = params;
  const setMovieDetails = useMovieStore((state) => state.setMovieDetails);
  const setMovieCast = useMovieStore((state) => state.setCast);
  const setReviews = useMovieStore((state) => state.setReviews);
  const setError = useMovieStore((state) => state.setError);
  const error = useMovieStore((state) => state.error);

  const movieDetails = async () => {
    try {
      const resp = await fetchMovieDetails(id);
      setMovieDetails(resp);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(statusCodeMessage(error));
      }
    }
  };

  const movieCast = async () => {
    const resp = await fetchMovieCasts(id);
    setMovieCast(resp?.cast);
  };

  const movieReviews = async () => {
    setReviews(await fetchReviews(id));
  };

  const movie = useMovieStore((state) => state.movie);
  const casts = useMovieStore((state) => state.casts);
  const reviews = useMovieStore((state) => state.reviews);

  const durationHours = Math.round(movie?.runtime / 60) || "";
  const durationMinutes = Math.round(movie?.runtime % 60) || "";
  const formattedDate = getFormattedDate(movie?.release_date);

  useEffect(() => {
    movieDetails();
    return () => {
      setError("");
    };
  }, []);

  useEffect(() => {
    if (movie?.id) {
      movieCast();
      movieReviews();
    }
  }, [movie?.id]);

  return (
    <main className="mt-5 flex flex-col">
      {!error ? (
        <>
          {movie?.id && (
            <div>
              <div className="container px-4">
                <div className="flex flex-col mt-6">
                  <div className="flex gap-7">
                    <div className="flex relative flex-col md:flex-row">
                      <div className="w-full md:w-[270px] h-[400px] relative">
                        <Image
                          src={
                            movie?.poster_path
                              ? `${IMAGE_URL}${movie?.poster_path}`
                              : EMPTY_MOVIE_URL
                          }
                          alt={movie?.title}
                          fill={true}
                        />
                      </div>
                      <div className="p-0 pt-[24px] md:pt-0 md:pl-[24px] w-full md:movie-detail">
                        <div className="items-center">
                          <h2 className="text-3xl font-medium">
                            {movie?.title}
                          </h2>
                          <div className="flex items-center gap-2 py-4">
                            <StarIcon
                              className="w-[32px] h-[32px] text-[#f84464]"
                              fill="#f84464"
                            />
                            <span className="text-xl font-bold">
                              {parseFloat(
                                movie?.vote_average.toString()
                              ).toFixed(1)}{" "}
                              / 10
                            </span>
                            <span className="text-md">
                              {movie?.vote_count} Votes
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-4 md:justify-normal justify-between items-center mt-4">
                          {formattedDate && (
                            <>
                              <div className="md:text-[14px] font-medium text-[12px]">
                                {formattedDate}
                              </div>
                              <span> | </span>
                            </>
                          )}
                          {movie?.runtime > 0 && (
                            <>
                              <div className="md:text-[14px] font-medium text-[12px]">{`${durationHours}h ${durationMinutes}m`}</div>
                              <span> | </span>
                            </>
                          )}
                          <div className="md:text-[14px] font-medium text-[12px]">
                            {movie?.genres
                              ?.map((genre: any) => genre?.name)
                              .join(", ")}
                          </div>
                        </div>
                        <div className="flex flex-col mt-5">
                          <h2 className="font-medium text-lg">Overview</h2>
                          <p className="text-md font-normal">
                            {movie?.overview}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col mb-6 mt-6 relative casts-slider">
                  {casts?.length ? (
                    <>
                      <div className="flex justify-between items-center mt-4">
                        <h2 className="text-3xl font-bold mb-4">Casts</h2>
                      </div>
                      <div className="flex flex-cols gap-8 mt-4 overflow-x-auto relative">
                        {casts?.map((cast: Cast) => (
                          <CastCard key={cast?.id} cast={cast} />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
              {reviews?.length ? (
                <div className="bg-gray-100 py-12">
                  <div className="container px-4">
                    <h2 className="text-3xl font-bold mb-8">Reviews</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {reviews?.slice(0, 3).map((review: Reviews) => (
                        <ReviewCard key={review?.id} review={review} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </>
      ) : (
        <div className="text-center bg-red-400 p-[8px] text-white">{error}</div>
      )}
    </main>
  );
}
