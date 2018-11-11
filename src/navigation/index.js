import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Pages from '../pages';

const B2Navigator = createStackNavigator(
  {
    C0: {
      screen: Pages.C0,
      navigationOptions: {
        title: 'Current page: C0',
      },
    },
    C1: {
      screen: Pages.C1,
      navigationOptions: {
        title: 'Current page: C1',
      },
    },
    C2: {
      screen: Pages.C2,
      navigationOptions: {
        title: 'Current page: C2',
      },
    },
  },
  {
    initialRouteName: 'C0',
    navigationOptions: {
      headerTransparent: true,
    },
  }
);

const A0Navigator = createStackNavigator(
  {
    B0: {
      screen: Pages.B0,
      navigationOptions: {
        title: 'Current page: B0',
      },
    },
    B1: {
      screen: Pages.B1,
      navigationOptions: {
        title: 'Current page: B1',
      },
    },
    B2: B2Navigator,
    B3: {
      screen: Pages.B3,
      navigationOptions: {
        title: 'Current page: B3',
      },
    },
  },
  {
    initialRouteName: 'B0',
    navigationOptions: {
      headerTransparent: true,
    },
  }
);

const RootNavigator = createStackNavigator(
  {
    A0: A0Navigator,
  },
  {
    initialRouteName: 'A0',
  }
);

export default class RootNavigation extends Component {
  onNavigationStateChange = (prevState, currentState) => {
    console.log('CURRENT NAV STATE', currentState);
  };

  render() {
    return <RootNavigator onNavigationStateChange={this.onNavigationStateChange} />;
  }
}
