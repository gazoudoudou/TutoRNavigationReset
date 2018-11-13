import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles as defaultStyles } from '../styles';

export default class C1 extends PureComponent {
  _navigateToC2 = () => this.props.navigation.navigate('C2');

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToC2}>
          <Text>Navigate to C2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
