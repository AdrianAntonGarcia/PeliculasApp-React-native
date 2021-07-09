import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowResponse, Movie} from '../interfaces/movie.interface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBNowResponse>(
      '/now_playing',
    );
    const respPopular = await movieDB.get<MovieDBNowResponse>('/popular');
    setPeliculasEnCine(respNowPlaying.data.results);
    setPeliculasPopulares(respPopular.data.results);

    setIsLoading(false);
  };
  useEffect(() => {
    // now_playing
    getMovies();
  }, []);
  return {peliculasEnCine, peliculasPopulares, isLoading};
};
