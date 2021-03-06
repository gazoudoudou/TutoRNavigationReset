import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles as defaultStyles } from '../styles';

export default class C0 extends PureComponent {
  _navigateToC1 = () => this.props.navigation.navigate('C1');

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToC1}>
          <Text>Navigate to C1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
