import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
  useEffect(() => {
    movieDB.get('/now_playing').then(res => console.log(res));
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
