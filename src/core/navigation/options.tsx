import React from 'react';
import { Alert } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProps,
} from 'react-navigation';
import { MenuContainer } from '@src/containers/menu';
import { ArrowIosBackFill } from '@src/assets/icons';
import { TopNavigationBar } from './components/topNavigationBar.component';
import {
  getCurrentRouteState,
  isRootRoute,
  getCurrentRouteIndex,
} from './util';
import { KEY_NAVIGATION_BACK } from './constants';

export type TopNavigationElement = React.ReactElement<any>;
export type BottomNavigationElement = React.ReactElement<any>;

export interface TopNavigationParams extends NavigationParams {
  header: (props: NavigationScreenProps) => TopNavigationElement | null;
}

export interface BottomNavigationParams extends NavigationParams {
  bottomNavigation: (props: NavigationScreenProps) => BottomNavigationElement | null;
}

const MenuTopNavigationParams: TopNavigationParams = {
  header: (props: NavigationScreenProps): TopNavigationElement => {
    // @ts-ignore (private API)
    const { routeName } = getCurrentRouteState(props.navigation);
    const index: number = getCurrentRouteIndex(props.navigation);

    return (
      <TopNavigationBar
        {...props}
        title={routeName}
        backIcon={isRootRoute(index) && ArrowIosBackFill}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  },
};

const MenuBottomNavigationParams: BottomNavigationParams = {
  bottomNavigation: (props: NavigationScreenProps): BottomNavigationElement => {
    return (
      <MenuContainer {...props} />
    );
  },
};

export const MenuNavigationOptions: NavigationParams = {
  ...MenuTopNavigationParams,
  ...MenuBottomNavigationParams,
};

export const SocialNavigationOptions: NavigationParams = MenuTopNavigationParams;

export const DashboardNavigationOptions: NavigationParams = MenuTopNavigationParams;
