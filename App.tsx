import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
