'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Image,
	Text,
	View,
	ScrollView
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import Util from '../common/Util';
import Header from '../common/Header';

export default class JobDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {job: null, title:'职位详情'};
	}
	_pressButton() {
		const { navigator } = this.props;
		if(navigator) {
			navigator.pop();
		}
	}
	_onScroll(event: Object) {
		//TODO:目前方案并不是很好，后续可以优化
		let y = event.nativeEvent.contentOffset.y;
		if (y && y > 0) {
			this.setState({ title: 'iOS工程师'});
		}else if (y < 0) {
			this.setState({ title: '职位详情'});
		}
	}

	render() {
    	const { job } = this.props;
		const { navigator } = this.props;
		return (
			<View style={{flex: 1}}>
				<Header
                  navigator={navigator}
                  initParams={{
					  backNeed: true,
                      title: this.state.title
                  }}/>

				<ScrollView onScroll={this._onScroll.bind(this)}
							scrollEventThrottle={200}>
					<View style={{padding:15, flexDirection:'row'}}>
						<Text style={{marginRight:10,fontSize:17,fontWeight: 'bold'}}>{job.title}</Text>
	          			<Text style={{color:'red'}}>[{job.salary}]</Text>
					</View>

					<View style={{padding: 15, flexDirection:'row'}}>

			          	<Text style={{marginRight:8,marginLeft:7,flex: 1}}>{job.info.split(' ')[0]}</Text>

	  		          	<Text style={{marginRight:8,marginLeft:7,flex: 1}}>{job.info.split(' ')[1]}</Text>

	  		          	<Text style={{marginRight:8,marginLeft:7,flex: 1}}>{job.info.split(' ')[2]}</Text>
			        </View>
					<Text style={{color:'#999',marginLeft:15,marginRight:15}}>
						职位诱惑：福利好、人性好、前景大。欢迎靠谱谨慎的你前来参加！
					</Text>
					<View style={styles.separator} />
					<TouchableOpacity>
						<View style={{padding: 15,flexDirection: 'row',alignItems:'center'}}>
							<Image style={{width:55,height:55,borderWidth:1,borderColor:'#EDEDED',marginRight:12,}} source={{uri: job.logo}} />
							<View style={{flex:1}}>
						        <Text style={{marginBottom:8,fontSize:15}}>{job.company}</Text>
						        <Text style={{color: '#999',marginBottom:4}}>{job.info.split(' ')[0]}</Text>
						        <Text style={{color: '#999'}}>{job.companyService}/{job.companyPosition}/{job.companyPerson}</Text>
							</View>
							<Image style={{width:20,height:20,marginRight:10}} source={require('../../images/icon_enter.png')} />
					    </View>
					</TouchableOpacity>
					<View style={styles.largeSeparator} />
					<View  style={{padding:15,flexDirection:'row'}}>
						 
						<Text style={{fontSize:17}}>职位描述</Text>
					</View>
					<View style={styles.separator} />
					<Text style={{color: '#999',padding:10}}>
						iOS开发工程师{'\n\n'}工作职责:{'\n\n'}1、负责开发iOS客户端软件App
						{'\n\n'}2、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
						{'\n\n'}3、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
						{'\n\n'}4、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
						{'\n\n'}5、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
						{'\n\n'}6、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
						{'\n\n'}7、参与软件开发的需求分析，详细设计、代码编写、单元测试等工作
					</Text>
				</ScrollView>
				<View style={{padding:15}}>
					<TouchableOpacity>
						<View style={{alignItems:'center',padding:10, borderRadius:3, borderWidth:1, borderColor:'#11a984'}}>
							<Text style={{color:'#11a984', fontSize:19}}>发送简历</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
    separator: {
        height: 1,
        backgroundColor: '#EDEDED',
		margin: 10
    },
	largeSeparator: {
		height: 15,
        backgroundColor: '#EDEDED',
	}
});
