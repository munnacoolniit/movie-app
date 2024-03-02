import axios from '@/utils/axios';

export const getMovies =  async (type: string) => {
    const res = await axios.get(`/${type}/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    return  res.data?.results;
}

export const searchMovies =  async (type: string, searchQuery: string) => {
    const res = await axios.get(`/${type}/movie?query=${searchQuery}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    return  res.data?.results;
}

export const fetchMovieDetails =  async (id: string) => {
    try {
        const res = await axios.get(`/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
        return  res.data;
    } catch (error)
    {
        throw error;
    }
}

export const fetchMovieCasts =  async (id: string) => {
    try {
        const res = await axios.get(`/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
        return  res.data;
    } catch (error) {
        throw error;
        
    }
}

export const fetchReviews =  async (id: string) => {
    const res = await axios.get(`/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    return  res.data?.results;
}