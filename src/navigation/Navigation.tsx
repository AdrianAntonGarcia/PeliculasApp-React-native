import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Movie} from '../interfaces/movie.interface';

// Parametros que pasamos a las diferentes pantallas
export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};
const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{cardStyle: {backgroundColor: '#f6f6f6'}}}
      />
    </Stack.Navigator>
  );
};
