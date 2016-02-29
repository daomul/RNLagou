/*
*   封装返回按钮
*   因为使用的是navigator，所以需要自己写顶部的返回
*/

'use strict'

import React, {
    View,
    Component,
    StyleSheet
} from 'react-native';

import Util from './Util';

export default class BackIcon extends Component {
    render () {
        return (
            <View style={styles.back}>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    back: {
        borderLeftWidth: 3 * Util.pixel,
        borderBottomWidth: 3 * Util.pixel,
        width: 16,
        height: 16,
        transform: [{rotate: '45deg'}],
        borderColor:'#C9C9C9',
        marginLeft: 20
    }
});
