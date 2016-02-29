'use strict'

import React,{
    Text,
    View,
    StyleSheet,
    Component,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../common/Util';
import Header from '../common/Header';

export default class Message extends Component {

    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#DEDEDE'}}>
                <Header
                  navigator={this.props.navigator}
                  initParams={{
                      backNeed: false,
                      title: '消息列表'
                  }}/>
                <View>
                    <View style={{backgroundColor:'#fff'}}>
                        <TouchableOpacity>
                            <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                                <View
                                    style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:25,borderWidth:0.5,borderColor:'#fff',backgroundColor:'#EE5C42'}}>
                                    <Icon name='ios-eye' size={37} color='#fff'></Icon>
                                </View>
                                <View style={{flex:2, paddingLeft: 10}}>
									<Text style={{fontSize:17,fontWeight:'bold', marginBottom: 8}}>谁看过我</Text>
									<Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
								</View>
                            </View>
                            <View style={styles.separator}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                                <View
                                    style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:25,borderWidth:0.5,borderColor:'#fff',backgroundColor:'#5CACEE'}}>
                                    <Icon name='ios-list' size={35} color='#fff'></Icon>
                                </View>
                                <View style={{flex:2, paddingLeft: 10}}>
									<Text style={{fontSize:17,fontWeight:'bold', marginBottom: 8}}>简历状态通知</Text>
									<Text style={{fontSize:16, color: '#999'}}>暂无新消息</Text>
								</View>
                            </View>
                            <View style={styles.separator}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                                <View
                                    style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:25,borderWidth:0.5,borderColor:'#fff',backgroundColor:'#EEB422'}}>
                                    <Icon name='ios-printer' size={35} color='#fff'></Icon>
                                </View>
                                <View style={{flex:2, paddingLeft: 10}}>
									<Text style={{fontSize:17,fontWeight:'bold', marginBottom: 8}}>职位邀请通知</Text>
									<Text style={{fontSize:16, color: '#999'}}>PLUS未开启</Text>
								</View>
                            </View>
                            <View style={styles.separator}></View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                                <View
                                    style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:25,borderWidth:0.5,borderColor:'#fff',backgroundColor:'#11a984'}}>
                                    <Icon name='ios-world' size={35} color='#fff'></Icon>
                                </View>
                                <View style={{flex:2, paddingLeft: 10}}>
                                    <View style={{flexDirection:'row'}}>
									    <Text style={{fontSize:17,fontWeight:'bold', marginBottom: 8,flex:1}}>拉钩vivi</Text>
                                        <Text style={{fontSize:14,color: '#999', marginBottom: 8}}>02月27日</Text>
                                    </View>
									<Text style={{fontSize:16, color: '#999'}}>这个周末好好休息一下吧，因为..</Text>
								</View>
                            </View>
                            <View style={styles.separator}></View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    separator: {
        height: Util.pixel,
        backgroundColor: '#E8E8E8',
        marginLeft:10,
        marginRight:10
    },
});
