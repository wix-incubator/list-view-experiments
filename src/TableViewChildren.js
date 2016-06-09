import React, { Component } from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';
import ReboundRenderer from './ReboundRenderer';

const RNTableViewChildren = requireNativeComponent('RNTableViewChildren', null);

const ROWS_FOR_RECYCLING = 20;

export default class TableViewChildren extends Component {
  constructor(props) {
    super(props);
    const binding = [];
    for (let i=0; i<ROWS_FOR_RECYCLING; i++) binding.push(-1);
    this.state = {
      binding: binding // childIndex -> rowID
    };
  }
  render() {
    const bodyComponents = [];
    for (let i=0; i<ROWS_FOR_RECYCLING; i++) {
      bodyComponents.push(
        <ReboundRenderer
          key={'r_' + i}
          boundTo={this.state.binding[i]}
          render={this.props.renderRow}
        />
      );
    }
    return (
      <View style={{flex: 1}}>
        <RNTableViewChildren
          style={{flex: 1}}
          onChange={this.onBind.bind(this)}
          rowHeight={this.props.rowHeight}
          numRows={this.props.numRows}
        >
          {bodyComponents}
        </RNTableViewChildren>
      </View>
    );
  }
  onBind(event) {
    const {target, childIndex, rowID, sectionID} = event.nativeEvent;
    this.state.binding[childIndex] = rowID;
    this.setState({
      binding: this.state.binding
    });
  }
}
