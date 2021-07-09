import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
  const {peliculasEnCine, isLoading} = useMovies();
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="green" size={120} />
      </View>
    );
  }
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
