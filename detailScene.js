/**
 * React Native workshop
 * https://github.com/bschandramohan/ReactNativeWorkshop
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackAndroid,
} from 'react-native';

class DetailScene extends Component {
  constructor(props) {
    super(props);

    BackAndroid.addEventListener('hardwareBackPress', function() {
      props.navigator && props.navigator.pop();
      return true;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbLarge} source={{uri: this.props.companyImage}} />

        <Text style={styles.welcome}>
          {Account = this.props.companyName}
        </Text>

        <Text style={styles.instructions}>
          {Account = this.props.companyDescription}
        </Text>
      </View>
    );
  }
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
    color: "orange"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumb: {
    width: 256,
    height: 256,
  }
});

module.exports = DetailScene;
