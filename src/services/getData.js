import { api } from './apiTheMovies';

export const getMovies = async () => {
  try {
    const {
      data: { results }
    } = await api.get('/movie/popular');
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getTopMovies = async () => {
  try {
    const {
      data: { results }
    } = await api.get('/movie/top_rated');
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getTopSeries = async () => {
  try {
    const {
      data: { results }
    } = await api.get('/tv/top_rated');
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularSeries = async () => {
  try {
    const {
      data: { results }
    } = await api.get('/tv/popular');
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getSeriesToday = async () => {
  try {
    const {
      data: { results }
    } = await api.get('/tv/airing_today');
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const {
      data: { results }
    } = await api.get(`/movie/${movieId}/videos`);
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const {
      data: { cast }
    } = await api.get(`/movie/${movieId}/credits`);
    return cast;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieSimilar = async (movieId) => {
  try {
    const {
      data: { results }
    } = await api.get(`/movie/${movieId}/similar`);
    return results;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (movieId) => {
  try {
    const { data } = await api.get(`/movie/${movieId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
