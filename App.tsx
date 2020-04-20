import './global';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Caver = require('caver-js');

interface States {
  latestBlock: number
}

export default class App extends React.Component<{}, States> {
  constructor() {
    super({});
    this.state = {
      latestBlock: -1,
    }
  }

  componentWillMount() {
    const caver = new Caver('https://api.baobab.klaytn.net:8651/');
  
    caver.klay.getBlock('latest').then((latestBlock: any) => {
      console.log(latestBlock)
      this.setState({latestBlock: caver.utils.hexToNumber(latestBlock.number)})
    })
  }

  render() {
    const latestBlockNumber = this.state.latestBlock;

    return (
      <View style={styles.container}>
        <Text>Latest klaytn block number is: {latestBlockNumber}</Text>
        <Text>Check your console!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
});