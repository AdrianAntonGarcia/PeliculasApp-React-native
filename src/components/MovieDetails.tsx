import React from 'react';
import {Text, View} from 'react-native';
import {MovieDetail, Cast, CastElement} from '../interfaces/movie.interface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieDetail: MovieDetail;
  cast: CastElement[];
}
export const MovieDetails = ({movieDetail, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{marginLeft: 5}}>{movieDetail.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieDetail.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>
      {/* Casting */}
    </>
  );
};
