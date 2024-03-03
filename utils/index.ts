"use client"

import { AxiosError } from "axios";

export function getFormattedDate(date: string) {
    if(date) {
      const DATE = new Date(date);
      const day = DATE.getDate();
      const month = DATE.toLocaleString('default', { month: 'short' });
      const year = DATE.getFullYear();
      return `${day} ${month} ${year}`;
    } else return ''
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
