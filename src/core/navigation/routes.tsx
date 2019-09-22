import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  LayoutsContainer,
  MenuContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  Chat1Container,
  Chat2Container,
  Chat3Container,
  ConversationsListContainer,
  MessagingContainer,
} from '@src/containers/layouts/messaging';
import {
  MenuNavigationOptions,
  SocialNavigationOptions,
} from './options';

const MessagingNavigationMap: NavigationRouteConfigMap = {
  ['Conversations List']: ConversationsListContainer,
  ['Chat 1']: Chat1Container,
  ['Chat 2']: Chat2Container,
  ['Chat 3']: Chat3Container,
  // ['Test Profile']: {
  //   screen: Profile6Container,
  //   navigationOptions: SocialNavigationOptions,
  // },
};

const ThemesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    // ['Layouts']: LayoutsContainer,
    ['Layouts']: ConversationsListContainer,
    ['Messaging']: MessagingContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const MenuNavigator: NavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  // ['Components']: LayoutsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...MessagingNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};

export const Router: NavigationContainer = createAppRouter(AppNavigator);
