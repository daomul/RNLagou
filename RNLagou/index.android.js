/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


import SkipShow from './class/SkipShow';
import Navigation from './class/common/Navigation';

class RNLagou extends Component {
  render() {
      var defaultName = 'SkipShowAndroid';
      var defaultComponent = SkipShow;
      return (
          <Navigation component= {defaultComponent} name= {defaultName} />
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
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
},
card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

AppRegistry.registerComponent('RNLagou', () => RNLagou);
