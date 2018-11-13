import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import * as Pages from '../pages';

const C3Navigator = createStackNavigator(
  {
    D0: {
      screen: Pages.D0,
      navigationOptions: {
        title: 'Page D0',
      },
    },
    D1: {
      screen: Pages.D1,
      navigationOptions: {
        title: 'Page D1',
      },
    },
  },
  {
    initialRouteName: 'D0',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
    },
  }
);

const A1Navigator = createStackNavigator(
  {
    C0: {
      screen: Pages.C0,
      navigationOptions: {
        title: 'Page C0',
      },
    },
    C1: {
      screen: Pages.C1,
      navigationOptions: {
        title: 'Page C1',
      },
    },
    C2: {
      screen: Pages.C2,
      navigationOptions: {
        title: 'Page C2',
      },
    },
    C3: {
      screen: C3Navigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'C0',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'yellow',
      },
    },
  }
);

const A0Navigator = createStackNavigator(
  {
    B0: {
      screen: Pages.B0,
      navigationOptions: {
        title: 'Page B0',
      },
    },
    B1: {
      screen: Pages.B1,
      navigationOptions: {
        title: 'Page B1',
      },
    },
  },
  {
    initialRouteName: 'B0',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red',
      },
    },
  }
);

const RootNavigator = createStackNavigator(
  {
    A0: A0Navigator,
    A1: A1Navigator,
  },
  {
    initialRouteName: 'A0',
    navigationOptions: {
      header: null,
    },
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
