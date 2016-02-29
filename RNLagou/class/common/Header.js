/*
*   封装导航条顶部（包含返回按钮）
*   因为使用的是navigator，所以需要自己写顶部
*/

'use strict'

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Icon from './BackIcon';

export default class Header extends Component {
    constructor() {
        super();
    }
    _popBack(){
        this.props.navigator.pop();
    }

    render() {
        var params = this.props.initParams;
        var renderIcon = <View style={styles.blackView}/>;
        var backName = params.backName ? params.backName : '';

        if (params.backNeed) {
            renderIcon = <Icon />;
        }
        return (
            <View style={[styles.header, styles.row, styles.center]}>
                <TouchableOpacity style={[styles.row,styles.center]} onPress={() => this._popBack()}>
                    {renderIcon}
                    <Text style={styles.fontFFF}>{backName}</Text>
                </TouchableOpacity>
                <View style={[styles.title, styles.center]}>
                    <Text style={[styles.fontFFF, styles.titlePos]} numberOfLines={1}>{params.title}</Text>
                </View>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    header:{
        paddingTop:20,
        height:60,
        backgroundColor:'#fff',
        borderBottomWidth: 1,
        borderBottomColor:'#E8E8E8'
    },
    fontFFF:{
        color:'#454545',
        fontSize:19,
        fontWeight:'bold'
    },
    title:{
        flex:1
    },
    titlePos:{
        width:200,
        textAlign:'center',
        marginRight:30
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    blackView: {
        width:36
    }
});
