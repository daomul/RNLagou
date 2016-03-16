/**
 * 针对Android的首页
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

const Icon = require('react-native-vector-icons/Ionicons');
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Message from './message/Message';
import Home from './home/Home';
import Personal from './person/Personal';
import Discover from './discover/DiscoverAndroidPage';

export default class MainAndroidPage extends Component {
    render () {
        return (
            <ScrollableTabView tabBarPosition="bottom" locked={false} onChangeTab={this._handleTabChange} tabBarUnderlineColor="#fff">
                <Home tabLabel='首页' navigator={this.props.navigator}/>
                <Message tabLabel='消息' navigator={this.props.navigator}/>
                <Discover tabLabel='发现' navigator={this.props.navigator}/>
                <Personal tabLabel='我' navigator={this.props.navigator}/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)'
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 3
    }
});
