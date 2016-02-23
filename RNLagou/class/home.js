'use strict';

import React, {
    Text,
    View,
    Component,
    Image,
    ListView,
    StyleSheet
} from 'react-native';

class SearchBarCom extends Component {
    render() {
        return (
            <View style={styles.SearchBaress}>
                <Text style={styles.SearchTextess}>拉钩</Text>
                <View style={styles.SearchInputess}>
                    <Image source={require('../images/icon_search.png')} style={styles.SearchImgess} />
                    <Text style={styles.SearchKeyWordess} />
                </View>
            </View>
        );
    }
}
var getHeaderView = function (index, total, context) {
    return (
        <View style={styles.headerViewess}>
            <Image source={require('../images/icon_home_img.png')} style={styles.headerImgess} />
        </View>
    );
}
export default class Hoem extends Component {
    constructor() {
        super();

    }
}
