import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

// import MainTabNavigator from './navigation/MainTabNavigator';
import AppNavigator from './navigation/AppNavigator';

const MyApp = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
        {/* <MainTabNavigator /> */}
    <AppNavigator />
  </ApplicationProvider>
);

export default MyApp;