import axios from '@/utils/axios';

export const getMovies =  async (type: string) => {
    const res = await axios.get(`/${type}/movie?language=en-US`);
    return  res.data?.results;
}

export const searchMovies =  async (type: string, searchQuery: string) => {
    const res = await axios.get(`/${type}/movie?query=${searchQuery}&language=en-US`);
    return  res.data?.results;
}

export const fetchMovieDetails =  async (id: string) => {
    try {
        const res = await axios.get(`/movie/${id}?language=en-US`);
        return  res.data;
    } catch (error)
    {
        throw error;
    }
}

export const fetchMovieCasts =  async (id: string) => {
    try {
        const res = await axios.get(`/movie/${id}/credits?language=en-US`);
        return  res.data;
    } catch (error) {
        throw error;
        
    }
}

export const fetchReviews =  async (id: string) => {
    const res = await axios.get(`/movie/${id}/reviews?language=en-US`);
    return  res.data?.results;
}