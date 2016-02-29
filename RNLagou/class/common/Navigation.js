/*!
 * Navigatiton
 * 过场动画: 从水平右向左出现，回退相反
 * {...route.passProps}模仿 NavigatorIOS的passProps
 */
'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	Text,
	View
} from 'react-native';

export default class Navigation extends Component {
	render() {
	    return (
	    <Navigator
	      	initialRoute={{ name: this.props.name, component: this.props.component}}
	      	configureScene={(route) => {
	        	return Navigator.SceneConfigs.HorizontalSwipeJump;
	      	}}
	      	renderScene={(route, navigator) => {
	        	let Component = route.component;
	        	return (
					<View style={{flex: 1}}>
						<Component {...route.params} navigator={navigator} route={route}/>
					</View>
				);
	      	}} />
	    );
	}
}
