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

import SkipShow from './SkipShow';

class RNLagou extends Component {
  render() {
      var defaultName = 'SkipShow';
      var defaultComponent = SkipShow;
      return (
          <Navigator
              initialRoute= {{name: defaultName, component: defaultComponent}}
              configureScene= {(route) => {
                  return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
              }}
              renderScene= {(route, navigator) => {
                  let Component = route.component;
                  return <Component {...route.params} navigator = {navigator} />
              }}
          />
      );
  }
}

AppRegistry.registerComponent('RNLagou', () => RNLagou);
