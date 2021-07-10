import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {MovieDetail, CastElement, Cast} from '../interfaces/movie.interface';

interface MovieDetails {
  cast: CastElement[];
  movieDetail?: MovieDetail;
  isLoading: boolean;
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    cast: [],
    movieDetail: undefined,
    isLoading: true,
  });

  const getMovieDetails = async () => {
    const [movieDetailResponse, castResponse] = await Promise.all([
      movieDB.get<MovieDetail>(`/${movieId}`),
      movieDB.get<Cast>(`/${movieId}/credits`),
    ]);

    setMovieDetails({
      cast: castResponse.data.cast,
      movieDetail: movieDetailResponse.data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return {...movieDetails};
};
