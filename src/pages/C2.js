// @flow
import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { defaultStyles } from '../defaultStyles';

export default class C2 extends PureComponent {
  _navigateToC0 = () => this.props.navigation.navigate('C0');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'red', marginTop: 100 }]}
          onPress={this._navigateToC0}
        >
          <Text>Navigate to C0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultStyles,
});
