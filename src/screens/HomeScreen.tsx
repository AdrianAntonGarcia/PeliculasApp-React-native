import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
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
