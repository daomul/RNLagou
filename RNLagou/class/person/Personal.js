/*
*   个人界面
*   背景图片充满并定至状态栏的实现 resizeMode:'stretch'
*/
'use strict'

import React, {
    View,
    Text,
    Component,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../common/Util';

export default class Personal extends Component {

    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#DEDEDE'}}>
                <View style={{height: 160}}>
                    <Image source={require('../../images/img_user_photo_bg.png')}
                           style={{flex:1,justifyContent:'center',alignItems:'center',resizeMode:'stretch',
                               width:null, height:null}} >
                        <TouchableOpacity onPress={()=> this._onPressMys('photo')}>
                            <View
                                style={{width:100,height:100,justifyContent:'center',alignItems:'center',marginTop:20,borderRadius:50,borderWidth:0.5,borderColor:'#fff'}}>
                                <Image source={{uri: 'http://www.lagou.com/image2/M00/04/6B/CgpzWlXxZpeARa3hAAERA329ulw284.png'}}
                                    style={{width:80,height:80,borderRadius:40,borderWidth:2,borderColor:'#fff'}}>
                                </Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this._onPressMys('name')}>
                            <Text style={{color:'#fff',fontSize:18,marginTop:10,backgroundColor:'transparent'}}>Zero</Text>
                        </TouchableOpacity>
                    </Image>
                </View>
                <View style={{backgroundColor:'#fff'}}>
                    <TouchableOpacity>
                        <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                            <Icon name='ios-list-outline' size={23} color='#BDBDBD'></Icon>
                            <Text style={{marginLeft:20,fontSize:17,color:'#8B8989'}}>简历</Text>
                        </View>
                        <View style={styles.separator}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                            <Icon name='ios-paperplane-outline' size={23} color='#BDBDBD'></Icon>
                            <Text style={{marginLeft:20,fontSize:17,color:'#8B8989',flex:1}}>PLUS</Text>
                            <Text style={{marginLeft:20,fontSize:14,textAlign:'right',color:'#11a984'}}>未开启</Text>
                        </View>
                        <View style={styles.separator}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                            <Icon name='ios-star-outline' size={23} color='#BDBDBD'></Icon>
                            <Text style={{marginLeft:20,fontSize:17,color:'#8B8989'}}>收藏</Text>
                        </View>
                        <View style={styles.separator}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                            <Icon name='ios-chatboxes-outline' size={23} color='#BDBDBD'></Icon>
                            <Text style={{marginLeft:20,fontSize:17,color:'#8B8989'}}>意见反馈</Text>
                        </View>
                        <View style={styles.separator}></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{padding:15,flexDirection:'row',alignItems:'center'}}>
                            <Icon name='ios-gear-outline' size={23} color='#BDBDBD'></Icon>
                            <Text style={{marginLeft:20,fontSize:17,color:'#8B8989'}}>更多设置</Text>
                        </View>
                    </TouchableOpacity>
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
