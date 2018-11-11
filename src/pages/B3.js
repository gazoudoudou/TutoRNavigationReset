import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { defaultStyles } from '../defaultStyles';

export default class B3 extends PureComponent {
  _navigateToC2 = () => this.props.navigation.navigate('C2');

  _resetToB3 = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'B3',
        }),
      ],
    });
    return this.props.navigation.dispatch(resetAction);
  };

  _resetToB0WithB3Before = () => {
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'B3',
        }),
        NavigationActions.navigate({
          routeName: 'B0',
        }),
      ],
    });
    return this.props.navigation.dispatch(resetAction);
  };

  _resetToC2WithB0Before = () => {
    const resetAction = StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'B0',
        }),
        NavigationActions.navigate({
          routeName: 'B2',
          action: NavigationActions.navigate({
            routeName: 'C2',
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
          style={[styles.touchable, { backgroundColor: 'red', marginTop: 100 }]}
          onPress={this._navigateToC2}
        >
          <Text>Navigate to C2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'yellow', marginTop: 20 }]}
          onPress={this._resetToB3}
        >
          <Text>Reset to B3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'yellow', marginTop: 20 }]}
          onPress={this._resetToB0WithB3Before}
        >
          <Text>Reset to B0 with B3 just before</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'red', marginTop: 20 }]}
          onPress={this._resetToC2WithB0Before}
        >
          <Text>Reset to C2 with B0 just before</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultStyles,
});
