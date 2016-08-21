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

// import CheckBox from 'react-native-checkbox';

class ReactNativeWorkshop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedStatus: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Developers!
        </Text>

        <TextInput
          style={{width: 100, height: 40, borderColor: 'gray', borderWidth: 1}}
          value="Sample TextInput Contents"
        />
        {/* Button */}
        <TouchableHighlight style={styles.marginAll} onPress={this._clickMePressed}>
            <Text>Click Me!</Text>
        </TouchableHighlight>

        // {this._renderSwitch()}
      </View>
    );
  }

  _clickMePressed() {
    console.log("User has pressed the click me button");
    Alert.alert(
      'Clicked!',
      'User has pressed the click me button',
      [ {text: 'Cool!'} ]
    );
  }

  // _switchClicked() {
  //   Alert.alert(
  //     'Switch Clicked!',
  //     'User has pressed the switch button',
  //     [ {text: 'Cool!'} ]
  //   );
  // }
  //
  // _renderSwitch() {
  //   return (
  //     <CheckBox
  //       label='Switch With Label? Cool!'
  //       checked={this.state.checkedStatus}
  //       onChange={(checked) => {
  //           console.log('checked status=', checked);
  //           this.setState({
  //             checkedStatus: checked
  //           });
  //         }
  //       }
  //     />
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
