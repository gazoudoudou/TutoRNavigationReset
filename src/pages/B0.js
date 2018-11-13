import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles as defaultStyles } from '../styles';

export default class B0 extends PureComponent {
  _navigateToB1 = () => this.props.navigation.navigate('B1');

  render() {
    return (
      <View style={defaultStyles.container}>
        <TouchableOpacity style={defaultStyles.touchable} onPress={this._navigateToB1}>
          <Text>Navigate to B1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
