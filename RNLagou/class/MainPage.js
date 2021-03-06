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

import Navigation from './common/Navigation';
import Home from './home/Home';
import Message from './message/Message';
import Personal from './person/Personal';
import Discover from './discover/Discover';

const HOME_TAB = 'homeTab';
const MESSAGE_TAB = 'messageTab';
const DISCOVER_TAB = 'discoverTab';
const PERSON_TAB = 'PersonTab';

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: HOME_TAB,
            notifCount: 0,
            presses: 0
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
            renderView = <Home navigator={this.props.navigator}/>;
        } else if(pageName == MESSAGE_TAB){
            renderView = <Message navigator={this.props.navigator}/>
        } else if(pageName == DISCOVER_TAB){
            renderView = <Discover  navigator={this.props.navigator}/>
        } else if(pageName == PERSON_TAB){
            renderView = <Personal navigator={this.props.navigator}/>
        }

        return (
            <View style={styles.pageView}>
                {renderView}
            </View>
        );
    }

    render() {
      return (
        <View style={styles.container}>
            <TabBarIOS
                tintColor="#11a984"
                barTintColor="#FFFFFF">
                <TabBarIOS.Item
                    title="首页"
                    icon={require('../images/icon_home_nor.png')}
                    selected={this.state.selectedTab === HOME_TAB}
                    onPress={() => this.setTab(HOME_TAB)}>
                    {this._renderContent(HOME_TAB)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="消息"
                    icon={require('../images/icon_message_nor.png')}
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === MESSAGE_TAB}
                    onPress={() => this.setTab(MESSAGE_TAB)}>
                    {this._renderContent(MESSAGE_TAB)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="发现"
                    icon={require('../images/icon_find_nor.png')}
                    selected={this.state.selectedTab === DISCOVER_TAB}
                    onPress={() => this.setTab(DISCOVER_TAB)}>
                    {this._renderContent(DISCOVER_TAB)}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我"
                    icon={require('../images/icon_user_nor.png')}
                    selected={this.state.selectedTab === PERSON_TAB}
                    onPress={() => this.setTab(PERSON_TAB)}>
                    {this._renderContent(PERSON_TAB)}
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
