import React, { Component } from 'react';
import {
  requireNativeComponent,
  View,
  Text
} from 'react-native';

const RNTableViewChildren = requireNativeComponent('RNTableViewChildren', null);

const ROWS_IN_DATA_SOURCE = 3000;
const ROWS_FOR_RECYCLING = 20;

const dataSource = [];
for (let i=0; i<ROWS_IN_DATA_SOURCE; i++) dataSource.push(`This is row # ${i+1} mano`);

export default class TableViewChildren extends Component {
  constructor(props) {
    super(props);
    const arr = [];
    for (let i=0; i<ROWS_FOR_RECYCLING; i++) arr.push(-1);
    this.state = {
      mapping: arr // childIndex -> rowID
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <RNTableViewChildren
          style={{flex: 1}}
          onChange={this.onChange.bind(this)}
          rowHeight={50}
          dataSourceSize={dataSource.length}
        >
          {this.state.mapping.map((rowID, childIndex) => this.renderRow(childIndex, rowID))}
        </RNTableViewChildren>
      </View>
    );
  }
  renderRow(childIndex, rowID) {
    return (
      <Text key={childIndex} style={{width: 200, height: 50}}>{dataSource[rowID]}</Text>
    );
  }
  onChange(event) {
    const {target, childIndex, row, section} = event.nativeEvent;
    this.state.mapping[childIndex] = row;
    this.setState({
      mapping: this.state.mapping
    });
  }
}
