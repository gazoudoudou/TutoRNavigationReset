// @flow
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { defaultStyles } from '../defaultStyles';

export default class C0 extends PureComponent {
  _navigateToB0 = () => this.props.navigation.navigate('B0');

  _resetAllToB3 = () => {
    const resetAction = StackActions.reset({
      key: null,
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'A0',
          action: NavigationActions.navigate({
            routeName: 'B3',
          }),
        }),
      ],
    });
    return this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'yellow', marginTop: 100 }]}
          onPress={this._navigateToB0}
        >
          <Text>Navigate to B0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'yellow', marginTop: 20 }]}
          onPress={this._resetAllToB3}
        >
          <Text>Reset all and navigate to B3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultStyles,
});
