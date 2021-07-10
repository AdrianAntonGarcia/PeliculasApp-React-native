import React from 'react';
import {Text, View} from 'react-native';
import {MovieDetail, Cast, CastElement} from '../interfaces/movie.interface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

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
        {/* Historia de la película */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Historia
        </Text>
        <Text style={{fontSize: 16}}>{movieDetail.overview}</Text>
        {/* Presupuesto */}
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieDetail.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <CastItem actor={cast[0]} />
      </View>
    </>
  );
};
