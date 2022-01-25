import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

import HomepageScreen from './app/screens/HomepageScreen';
import AppNavigator from './app/navigation/AppNavigator';
import myTheme from './app/config/myTheme';

function App(props) {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;
