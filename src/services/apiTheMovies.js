import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1b1d0ceb3d9c264a1c639da90e12de53',
    language: 'pt-br',
    page: 1
  }
});
