import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { defaultStyles } from '../defaultStyles';

export default class B0 extends PureComponent {
  _navigateToB3 = () => this.props.navigation.navigate('B3');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[styles.touchable, { backgroundColor: 'yellow', marginTop: 100 }]}
          onPress={this._navigateToB3}
        >
          <Text>Navigate to B3</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...defaultStyles,
});
