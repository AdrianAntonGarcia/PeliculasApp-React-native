import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, View, ScrollView, Text} from 'react-native';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import {Dimensions} from 'react-native';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation: {navigate}}: Props) => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="green" size={120} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <Text
          style={{
            flex: 1,
            fontSize: 30,
            fontWeight: 'bold',
            marginHorizontal: 10,
            marginBottom: 20,
          }}>
          Películas en cartelera
        </Text>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => (
              <MoviePoster movie={item}></MoviePoster>
            )}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.92}
          />
        </View>
        {/* Películas populares */}
        <HorizontalSlider movies={popular} title="Películas Populares" />
        {/* Películas top rated */}
        <HorizontalSlider movies={topRated} title="Películas Mejor Valoradas" />
        {/* Películas próximas */}
        <HorizontalSlider movies={upcoming} title="Próximas Películas" />
      </View>
    </ScrollView>
  );
};
