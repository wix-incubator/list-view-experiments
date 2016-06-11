import React, { Component } from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import TableViewChildrenExample from './tableview-children';
import InfiniteScrollViewChildrenExample from './infinite-scrollview-children';

class example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      example: undefined
    };
  }
  render() {
    if (this.state.example) {
      const Example = this.state.example;
      return <Example />;
    }
    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.setState({example: TableViewChildrenExample})}>
          <Text style={{color: 'blue', marginBottom: 20}}>
            TableView with Children
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.setState({example: InfiniteScrollViewChildrenExample})}>
          <Text style={{color: 'blue', marginBottom: 20}}>
            Infinite ScrollView with Children
          </Text>
        </TouchableOpacity>

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

AppRegistry.registerComponent('example', () => example);
