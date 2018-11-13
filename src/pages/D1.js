import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles as defaultStyles } from '../styles';

export default class D1 extends PureComponent {
  _resetToC2 = () => {
    const action = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({
          routeName: 'A1',
          action: NavigationActions.navigate({
            routeName: 'C2',
          }),
        }),
      ],
    });
    return this.props.navigation.dispatch(action);
  };

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._resetToC2}>
          <Text>Reset to C2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
