import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { styles as defaultStyles } from '../styles';

export default class B1 extends PureComponent {
  _navigateToC0 = () => this.props.navigation.navigate('C0');

  _resetToB1 = () => {
    const action = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'B1',
        }),
      ],
    });
    return this.props.navigation.dispatch(action);
  };

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToC0}>
          <Text>Navigate to C0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[defaultStyles.touchable, defaultStyles.subTouchable]} onPress={this._resetToB1}>
          <Text>Reset to B1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
