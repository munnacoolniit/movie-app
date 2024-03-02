"use client"

import { AxiosError } from "axios";

export const toBase64 = (str: string) => {
	return Buffer.from(str).toString("base64");
}

export function shimmer() {
    return `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100" height="100" fill="url(#shimmer)">
          <animate
            attributeName="x"
            values="-150; 150"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>`
}


export function getFormattedDate(date: string) {
    const DATE = new Date(date);
    const day = DATE.getDate();
    const month = DATE.toLocaleString('default', { month: 'short' });
    const year = DATE.getFullYear();
    return `${day} ${month} ${year}`;
}


export const getFavoriteMovies = ()=> {
  if(typeof window !==  'undefined') {
    const favs =  localStorage?.getItem('favoriteMovies')
    return favs ? JSON.parse(favs): [];
  }
  }

 export const setFavoriteMovies = (movieIds: number[])=> {
  if(typeof window !==  'undefined') {
    localStorage?.setItem('favoriteMovies', JSON.stringify(movieIds));
  }
}

  export const statusCodeMessage = (error: AxiosError) => {
    const statusCode = error?.response?.status;
    let errorMessage = ""
      switch (statusCode) {
        case 400:
          errorMessage = 'Bad request - check your request parameters'
          break;
        case 401:
          errorMessage = 'Unauthorized - check your authentication credentials'
          break;
        case 404:
          errorMessage = 'Not found - the requested resource does not exist'
          break;
        case 500:
          errorMessage = 'Internal server error - please try again later'
          break;
        default:
          errorMessage =  `Error: ${statusCode}`;
      }
      return errorMessage;
  }

  export const EMPTY_MOVIE_URL = '/dummy-image.png'
