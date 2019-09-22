import React from 'react';
import { BottomNavigation, BottomNavigationTab } from 'react-native-ui-kitten';

export default class BottomNavigationShowcase extends React.Component {
  public state = {
    selectedIndex: 0,
  };

  private handleTabSelect = (selectedIndex: number) => {
    this.setState({ selectedIndex });
  };

  public render(): React.ReactNode {
    return (
      <BottomNavigation
         selectedIndex={this.state.selectedIndex}
         onSelect={this.handleTabSelect}>
         <BottomNavigationTab title='Tab 1'/>
         <BottomNavigationTab title='Tab 2'/>
         <BottomNavigationTab title='Tab 3'/>
      </BottomNavigation>
    );
  }
}