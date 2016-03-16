'use strict';

import React, {
    Text,
    TextInput,
    View,
    Component,
    Image,
    ListView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import JobRowCell from './JobRowCell';
import JobList from '../service/JobServiceList';
import JobDetail from './JobDetail';
import RNWebView from '../common/RNWebView';

class SearchBarCom extends Component {
    render() {
        return (
            <View style={styles.SearchBaress}>
                <Text style={styles.SearchTextess}>拉钩</Text>
                <View style={styles.SearchInputess}>
                    <Image source={require('../../images/icon_search.png')} style={styles.SearchImgess} />
                    <TextInput
                        autoCapitalize= 'none'
                        autoCorrect= {false}
                        placeholderTextColor= '#14ba91'
                        placeholder='输入职位名或公司名'
                        style={styles.SearchKeyWordess} />
                </View>
            </View>
        );
    }
}

export default class Hoem extends Component {
    constructor() {
        super();
        var data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: data.cloneWithRows(this._getRows({}))
        }

        this._renderRow = this._renderRow.bind(this);
        this._getHeaderView = this._getHeaderView.bind(this);
    }
    render() {
        var dataList = <ListView automaticallyAdjustContentInsets= {false}
                                 dataSource= {this.state.dataSource}
                                 renderRow= {this._renderRow}
                                 renderHeader= {this._getHeaderView} />;
         return (
            <View style= {styles.container}>
                <SearchBarCom />
                {dataList}
            </View>
         );
    }
    //渲染每一行数据
    _renderRow(jobData: Object, sectionID: number, rowID: number) {
        return (
            <JobRowCell onSelect={() => this.selectJob(jobData)} jobData={jobData} />
        );
    }
    //拿到数据集
    _getRows(): Array<string> {
        return JobList;
    }
    //点击每一个cell事件
    selectJob(job: Object) {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: '职位详情',
                component: JobDetail,
                params: { job: job}
            });
        }
    }
    _getHeaderView(index, total, context) {
        return (
            <TouchableOpacity onPress={() => this._touchImgToWorld()}>
                <View style={styles.headerViewess}>
                    <Image source={require('../../images/icon_home_img.png')} style={styles.headerImgess} />
                </View>
            </TouchableOpacity>

        );
    }
    _touchImgToWorld() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: '',
                component: RNWebView,
                params: {
                    backName: '返回',
                    url: 'http://www.lagou.com/'
                }
            });
        }
    }
}

var styles = StyleSheet.create({
    SearchBaress: {
        backgroundColor: '#11a984',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    SearchTextess: {
        color: '#FFFFFF',
        fontSize: 20
    },
    SearchInputess: {
        backgroundColor: '#0f9574',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        borderRadius: 15,
    },
    SearchImgess: {
        width: 15,
        height: 15,
        marginLeft: 0,
        marginRight: 8
    },
    SearchKeyWordess: {
        color: '#14ba91',
        fontSize: 15,
        height: 20,
        width: 170
    },

    headerViewess: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        marginBottom: 15,
        flexDirection: 'row',
        flex: 1
    },
    headerImgess: {
        flex: 1,
        height: 100
    },

    container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#EEEEEE',
		paddingBottom: 48,
	}
});
