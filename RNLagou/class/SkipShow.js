/**
*   启动页显示图
*/

'use strict'
import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import MainPage from './MainPage';
import MainAndroidPage from './MainAndroidPage';

export default class SkipShow extends Component {
    componentWillMount() {
        var { navigator } = this.props;
        if (this.props.route.name == 'SkipShowAndroid') {
            setTimeout(() => {
                navigator.replace({
                    name : 'MainAndroidPage',
                    component : MainAndroidPage
                });
            },1000);
        }else {
            setTimeout(() => {
                navigator.replace({
                    name : 'MainPage',
                    component : MainPage
                });
            },1000);
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/hello_page_bg.png')} style={styles.backgroundImage} />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        marginTop: 20,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
		width: null,
		height: null,
        backgroundColor: 'transparent',
        resizeMode:'cover'
    }
});
