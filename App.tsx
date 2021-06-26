import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
