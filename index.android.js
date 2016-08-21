/**
 * React Native workshop
 * https://github.com/bschandramohan/ReactNativeWorkshop
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import MainScene from "./mainScene";

class ReactNativeWorkshop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute = {
          {name: "Main Scene", component: MainScene}
        }
        renderScene = {this._renderScene.bind(this)}
      />
    );
  }

  _renderScene(route, navigator) {
    let ComponentToShow = route.component;
    let propsToSupply = route.props;
    return (
      <ComponentToShow
        navigator={navigator}
        route={route}
        {...propsToSupply}
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
