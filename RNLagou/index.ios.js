/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import SkipShow from './class/SkipShow';
import Navigation from './class/common/Navigation';

class RNLagou extends Component {
  render() {
      var defaultName = 'SkipShow';
      var defaultComponent = SkipShow;
      return (
          <Navigation component= {defaultComponent} name= {defaultName} />
      );
  }
}

AppRegistry.registerComponent('RNLagou', () => RNLagou);
