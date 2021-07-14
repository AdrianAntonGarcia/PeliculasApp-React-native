import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {FadeScreen} from './src/screens/FadeScreen';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <Navigation /> */}
      <FadeScreen />
    </NavigationContainer>
  );
};

export default App;
