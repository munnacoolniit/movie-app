import axios from '@/utils/axios';

export const getMovies =  async (type: string) => {
    const res = await axios.get(`/${type}/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    return  res.data?.results;
}

export const searchMovies =  async (type: string, searchQuery: string) => {
    const res = await axios.get(`/${type}/movie?query=${searchQuery}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
    return  res.data?.results;
}