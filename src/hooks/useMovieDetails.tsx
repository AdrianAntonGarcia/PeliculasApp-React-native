import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDetail} from '../interfaces/movie.interface';

interface MovieDetails {
  cast: any[];
  movieFull?: MovieDetail;
  isLoading: boolean;
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    cast: [],
    movieFull: undefined,
    isLoading: true,
  });

  const getMovieDetails = async () => {
    const resp = await movieDB.get<MovieDetail>(`/${movieId}`);
    console.log(resp.data.overview);
    setMovieDetails({cast: [], movieFull: resp.data, isLoading: false});
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return {movieDetails};
};
