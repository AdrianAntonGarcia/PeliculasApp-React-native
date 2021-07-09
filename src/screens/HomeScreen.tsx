import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
  const {peliculasEnCine, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="green" size={120} />
      </View>
    );
  }
  return (
    <View style={{marginTop: top + 20}}>
      <MoviePoster movie={peliculasEnCine[2]}></MoviePoster>
    </View>
  );
};
