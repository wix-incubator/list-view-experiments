import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TableViewChildren from './src/TableViewChildren';

export default class TableViewChildrenExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TableViewChildren />
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
});
