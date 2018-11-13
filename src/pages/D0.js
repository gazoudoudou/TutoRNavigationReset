import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles as defaultStyles } from '../styles';

export default class D0 extends PureComponent {
  _navigateToD1 = () => this.props.navigation.navigate('D1');

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToD1}>
          <Text>Navigate to D1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
