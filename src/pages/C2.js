import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles as defaultStyles } from '../styles';

export default class C1 extends PureComponent {
  _navigateToD0 = () => this.props.navigation.navigate('D0');

  _resetToC2WithC1Before = () => {
    const action = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'C1',
        }),
        NavigationActions.navigate({
          routeName: 'C2',
        }),
      ],
    });
    return this.props.navigation.dispatch(action);
  };

  _resetToD0 = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'C3',
          action: NavigationActions.navigate({
            routeName: 'D0',
          }),
        }),
      ],
    });
    return this.props.navigation.dispatch(action);
  };

  _resetToC0WithD0Before = () => {
    const action = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'C3',
          action: NavigationActions.navigate({
            routeName: 'D0',
          }),
        }),
        NavigationActions.navigate({
          routeName: 'C0',
        }),
      ],
    });
    return this.props.navigation.dispatch(action);
  };

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToD0}>
          <Text>Navigate to D0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.touchable, defaultStyles.subTouchable]}
          onPress={this._resetToC2WithC1Before}
        >
          <Text>Reset to C2 with only C1 before</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defaultStyles.touchable, defaultStyles.subTouchable]} onPress={this._resetToD0}>
          <Text>Reset to D0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[defaultStyles.touchable, defaultStyles.subTouchable]}
          onPress={this._resetToC0WithD0Before}
        >
          <Text>Reset to C0 with D0 before</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
