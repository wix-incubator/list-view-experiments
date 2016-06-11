import React, { Component } from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';
import ReboundRenderer from './ReboundRenderer';

const RNInfiniteScrollViewChildren = requireNativeComponent('RNInfiniteScrollViewChildren', null);

const ROWS_FOR_RECYCLING = 8;

export default class InfiniteScrollViewChildren extends Component {
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
        <RNInfiniteScrollViewChildren
          style={{flex: 1}}
          onChange={this.onBind.bind(this)}
          rowHeight={this.props.rowHeight}
          numRenderRows={ROWS_FOR_RECYCLING}
        >
          {bodyComponents}
        </RNInfiniteScrollViewChildren>
      </View>
    );
  }
  onBind(event) {
    const {target, childIndex, rowID} = event.nativeEvent;
    this.state.binding[childIndex] = rowID;
    this.setState({
      binding: this.state.binding
    });
  }
}
