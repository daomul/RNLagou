/**
*   首页布局：包含导航和底部TabBar
TODO: 1 改造NavigatorIOS为纯Navigator
*/

'use strict';

import React, {
    StyleSheet,
    Text,
    View,
    Component,
    TabBarIOS,
    Navigator,
    NavigatorIOS
} from 'react-native';

const HOME_TAB = 'homeTab';
const MESSAGE_TAB = 'messageTab';
const DISCOVER_TAB = 'discoverTab';
const ME_TAB = 'meTab';

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: HOME_TAB,
            notifCount: 0,
            presses: 0,
        };
    }

    //每次点击切换：tab的点击状态
    setTab(tabId){
        this.setState({selectedTab: tabId})
    }

    //每次点击切换：tab时加载界面内容
    _renderContent(pageName: string, num?: number) {
        var renderView;
        if(pageName == HOME_TAB){
            renderView = <View />;
        } else if(pageName == MESSAGE_TAB){
            renderView = <View />
        } else if(pageName == DISCOVER_TAB){
            renderView = <View />
        } else if(pageName == ME_TAB){
            renderView = <View />
        }

        return (
            <View style={styles.pageView}>
                {renderView}
            </View>
        );
    }

    //进入对应的Nav导航
    _addNavigator(component, title){
        var data = null;
        return <NavigatorIOS
            style = {styles.container}
            barTintColor = '#FFF'
            titleTextColor = "#666"
            tintColor = "#666"
            translucent = {false}
            initialRoute= {{
                component: component,
                title: title,
                passProps:{
                    data: data
                }
            }}
        />;
    }

    render() {
      return (
        <View style={styles.container}>
          <TabBarIOS
            tintColor="#11a984"
            barTintColor="#FFFFFF">
            <TabBarIOS.Item
              title="首页"
              icon={require('./images/icon_home_nor.png')}
              selected={this.state.selectedTab === HOME_TAB}
              onPress={() => this.setTab(HOME_TAB)}>
              {this._renderContent(HOME_TAB)}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="消息"
              icon={require('./images/icon_message_nor.png')}
              badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
              selected={this.state.selectedTab === MESSAGE_TAB}
              onPress={() => this.setTab(MESSAGE_TAB)}>
              {this._addNavigator('Message', '消息列表')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="发现"
              icon={require('./images/icon_find_nor.png')}
              selected={this.state.selectedTab === DISCOVER_TAB}
              onPress={() => this.setTab(DISCOVER_TAB)}>
              {this._addNavigator('Discover', '发现')}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title="我"
              icon={require('./images/icon_user_nor.png')}
              selected={this.state.selectedTab === ME_TAB}
              onPress={() => this.setTab(ME_TAB)}>
              {this._renderContent(ME_TAB)}
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
      );
    }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageView: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    margin: 50,
  }
});
