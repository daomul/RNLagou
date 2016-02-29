 'use strict'

import React, {
  WebView,
  View,
  Component
} from 'react-native';

import Util from './Util';
import Header from './Header';


export default class RNWebView extends Component{
  render(){
    return (
      <View>
        <Header
            navigator={this.props.navigator}
            initParams={{
                backName: '',
                backNeed:true,
                title: ''
            }}/>
        <WebView
            contentInset={{top:0}}
            startInLoadingState={true}
            style={{width: Util.size.width, height:Util.size.height -50}}
            source={{uri: this.props.url}}>
        </WebView>
      </View>
    );
  }
}
