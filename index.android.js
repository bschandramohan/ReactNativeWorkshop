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
  ListView,
  Dimensions,
  Image,
} from 'react-native';

// let companyList = require('./data/companies.json');
// let windowWidth = Dimensions.get('window').width;

class ReactNativeWorkshop extends Component {
  constructor(props) {
    super(props);

    // TRY 1
    //let ds = new ListView.DataSource();
    // You end up with error: "Must provide a rowHasChanged function"

    // TRY 2 - make sure Try 1 code above is commented out
    // let ds = new ListView.DataSource(
    //   {rowHasChanged: (r1, r2) => r1 !== r2}
    // );
    //
    // this.state = {
    //   dataSource: ds.cloneWithRows(companyList.companies)
    // };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Developers!
        </Text>

        {/* TRY 1
        <ListView
          dataSource={this.state.dataSource}
        />
        this.props.renderRow is mandatory.
        */}

        {/* TRY 2
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
        */}

        {/* TRY 3
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        */}
      </View>
    );
  }
  //
  // _renderRow(rowData) {
  //   //console.log("rowData=");
  //   //console.log(rowData);
  //   // console.log("rowData.imgSrc=");
  //   // console.log(rowData.imgSrc);
  //
  //   return (
  //     <TouchableHighlight
  //       style={{width: windowWidth}}
  //       onPress={() => {
  //         console.log("Row pressed;");
  //       }}>
  //       <View>
  //         <View style={styles.row}>
  //           {/*
  //             Images aren't displayed because it has to be known at buildtime.
  //             https://github.com/facebook/react-native/issues/2481.
  //             Solution is to use the require file and then reference here.
  //           */}
  //           <Image style={styles.thumb} source={{uri: rowData.imgSrc}} />
  //
  //           <Text style={styles.text}>
  //             {rowData.Title}
  //           </Text>
  //         </View>
  //       </View>
  //     </TouchableHighlight>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#1A6ABA',
  },
});

AppRegistry.registerComponent('ReactNativeWorkshop', () => ReactNativeWorkshop);
