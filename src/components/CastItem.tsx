import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {CastElement} from '../interfaces/movie.interface';

interface Props {
  actor: CastElement;
}
export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      <Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}} />
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9.51,
    elevation: 10,
  },
  actorInfo: {marginLeft: 10},
});
