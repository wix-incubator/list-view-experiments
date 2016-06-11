import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import InfiniteScrollViewChildren from './src/InfiniteScrollViewChildren';

export default class InfiniteScrollViewChildrenExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InfiniteScrollViewChildren
          renderRow={this.renderRow}
          rowHeight={250}
        />
      </View>
    );
  }
  renderRow(rowID) {
    return (
      <Text style={{
        width: Dimensions.get('window').width,
        height: 250,
        fontSize: 50,
        textAlign: 'center',
        paddingTop: 100,
        backgroundColor: hashStringToColor(`${rowID * 47}-${rowID * 17}`)
      }}>{`${rowID}`}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

// fun functions to generate background color from string hash

function djb2(str){
  var hash = 5381;
  for (var i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i); /* hash * 33 + c */
  }
  return hash;
}

function hashStringToColor(str) {
  var hash = djb2(str);
  var r = (hash & 0xFF0000) >> 16;
  var g = (hash & 0x00FF00) >> 8;
  var b = hash & 0x0000FF;
  return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}
