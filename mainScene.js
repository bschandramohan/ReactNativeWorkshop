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
  Image,
  ListView,
  TouchableHighlight,
  Dimensions,
  Navigator,
} from 'react-native';

import DetailScene from "./detailScene";

let companyList = require('./data/companies.json');
let windowWidth = Dimensions.get('window').width;

class MainScene extends Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2}
    );

    this.state = {
      dataSource: ds.cloneWithRows(companyList.companies)
    };

    this._navigateToDetailView = this._navigateToDetailView.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Developers!
        </Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }

  _renderRow(rowData) {
    // console.log("rowData");
    // console.log(rowData);

    return (
      <View style={styles.row}>
        <TouchableHighlight
          style={{width: windowWidth}}
          onPress={() => {
            this._navigateToDetailView(rowData);
          }}>
          <View>
            <Image style={styles.thumb} source={{uri: rowData.imgSrc}} />

            <Text style={styles.text}>
              {rowData.Title}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _navigateToDetailView(rowData) {
    this.props.navigator.push({
      component: DetailScene,
      props: {
        companyName: rowData.Title,
        companyImage: rowData.imgSrc,
        companyDescription: rowData.Description
      }
    });
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

module.exports = MainScene;
