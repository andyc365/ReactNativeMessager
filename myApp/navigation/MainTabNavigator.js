import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../../screens/HomeScreen';
import BottomNavigationShowcase from './BottomNavigationShowcase';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
}, {
  initialRouteName: 'HomeStack',
  tabBarComponent: BottomNavigationShowcase,
});

tabNavigator.path = '';

export default tabNavigator;
