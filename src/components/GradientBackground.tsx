import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const GradientBackground = ({children}: Props) => {
  const {
    colors: {primary, secondary},
  } = useContext(GradientContext);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[primary, secondary]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {children}
    </View>
  );
};
