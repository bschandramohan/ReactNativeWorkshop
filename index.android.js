/**
 * React Native workshop
 * https://github.com/bschandramohan/ReactNativeWorkshop
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';

class ReactNativeWorkshop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Developers!
        </Text>

        // Challenge:  Add Text Input and a Button which shows a message when pressed.

        // <TextInput
        //   style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
        //   value="Sample TextInput Contents"
        // />
        // {/* Button */}
        // <TouchableHighlight style={styles.marginAll} onPress={this._clickMePressed}>
        //     <Text>Click Me!</Text>
        // </TouchableHighlight>
      </View>
    );
  }

  // _clickMePressed() {
  //   console.log("User has pressed the click me button");
  //   Alert.alert(
  //     'Clicked!',
  //     'User has pressed the click me button',
  //     [ {text: 'Cool!'} ]
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
