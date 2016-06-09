import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import TableViewChildren from './src/TableViewChildren';

const ROWS_IN_DATA_SOURCE = 3000;
const dataSource = [];
for (let i=0; i<ROWS_IN_DATA_SOURCE; i++) dataSource.push(`This is row # ${i+1} mano`);

export default class TableViewChildrenExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TableViewChildren
          renderRow={this.renderRow}
          numRows={dataSource.length}
          rowHeight={50}
        />
      </View>
    );
  }
  renderRow(rowID) {
    return (
      <Text style={{
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#ffffff'
      }}>{dataSource[rowID]}</Text>
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
