import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movie.interface';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
  useEffect(() => {
    movieDB
      .get<MovieDBNowPlaying>('/now_playing')
      .then(res => console.log(res.data.results[0].original_title));
  }, []);
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir detalle"
        onPress={() => {
          navigate('DetailScreen');
        }}
      />
    </View>
  );
};
