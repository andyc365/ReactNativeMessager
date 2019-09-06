import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
// import { RootComponent } from '../path-to/root.component'; // <-- Import your application entry point

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
      <Text>
        Hi Andy！</Text>
    {/* <RootComponent /> */}
  </ApplicationProvider>
);

export default App;