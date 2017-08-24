/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var Main = require('./Component/Main/Main')

export default class ZJHTCarOwner extends Component {
  render() {
    return (
        <Main/>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});

AppRegistry.registerComponent('ZJHTCarOwner', () => ZJHTCarOwner);
