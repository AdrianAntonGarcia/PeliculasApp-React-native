import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {api_key: '8a7fd4415553a735edf68497c23ca3f2', language: 'es-ES'},
});

export default movieDB;
