'use strict'

import React, {
    Text,
    View,
    Image,
    StyleSheet,
    Component,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native';

import RNWebView from '../common/RNWebView';

import Util from '../common/Util';
import Header from '../common/Header';
import DiscoverServiceDate from '../service/DiscoverServiceList';
import DiscoverRowCell from './DiscoverCell';
import ViewPager from 'react-native-viewpager';

var PAGES = [
  { image:'http://www.lagou.com/image1/M00/47/51/Cgo8PFbBiemAM2CrAAHpHn8t2tg622.jpg',title: '2016年最值得关注的5个运营团队'},
  { image:'http://www.lagou.com/image1/M00/45/D9/CgYXBlYfSoOALcb8AAGNh3p2t8o742.jpg', title: '达芬奇600年前求职信 职业范是一种习惯'},
  { image:'http://www.lagou.com/image1/M00/45/D6/Cgo8PFX6fw2AASmkAABv7QNqJ5E476.jpg', title: '如何用10分钟拿下offer'}
];

export default class Discover extends Component {
    constructor() {
        super();

        //发现列表数据
        var data = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        //顶部的幻灯片数据
        var headerDataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2
        });
        this.state = {
            dataSource: data.cloneWithRows(this._getRows({})),
            headerDataSource: headerDataSource.cloneWithPages(PAGES)
        }
        this._renderRow = this._renderRow.bind(this);

    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor:'#DEDEDE'}}>
                <Header
                    navigator={this.props.navigator}
                    initParams={{
                        backNeed: false,
                        title: '全部'
                    }}>
                </Header>
                <ScrollView style={{backgroundColor:'#eee',marginBottom:43}}
                            automaticallyAdjustContentInsets={false}>
                      <ViewPager
                            dataSource={this.state.headerDataSource}
                            style={styles.listHeader}
                            renderPage={this._renderPage}
                            isLoop={true}
                            autoPlay={true} />
                      <ListView dataSource={this.state.dataSource}
                                renderRow={this._renderRow}
                                style={{marginTop:20, backgroundColor:'#FFF'}}>

                      </ListView>
                 </ScrollView>
            </View>
        );
    }

    //渲染每一行数据
    _renderRow(discoverServiceDate: Object, sectionID: number, rowID: number) {
        return (
            <DiscoverRowCell onSelect={() => this.selectDiscover(discoverServiceDate)} discoverData={discoverServiceDate} />
        );
    }
    _renderPage(story: Object, pageID: number | string) {
        return (
              <TouchableOpacity style={{flex: 1}} onPress={() => {this.selectStory(story)}}>
                <Image
                  source={{uri: story.image}}
                  style={styles.backgroundImage} >
                  <Text style={styles.swipeText}
                    numberOfLines={2}>
                    {story.title}
                  </Text>
                </Image>
              </TouchableOpacity>
        );
    }
    //拿到数据集
    _getRows(): Array<string> {
        return DiscoverServiceDate;
    }
    //点击每一个cell事件
    selectDiscover(discover: Object) {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: '发现',
                component: RNWebView,
                params: {
                    backName: '返回',
                    title: '发现',
                    url: discover.detailURL
                }
            });
        }
    }
    //渲染幻灯片每次跳动变幻的数字更改
    _renderPagination(index, total, context) {
        return (
            <View style={{position: 'absolute', bottom: 20,right: 10}}>
                <View style={styles.countView}>
                <Text style={styles.count}>
                    <Text>{Math.floor(index + 1)}</Text>/{total}
                </Text>
            </View>
            </View>
         )
    }
    _onClickToWorld(uri: Object){
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: '',
                component: RNWebView,
                params: {
                    backName: '返回',
                    url: uri
                }
            });
        }
    }
}
var styles = StyleSheet.create({
    separator: {
        height: Util.pixel,
        backgroundColor: '#E8E8E8',
        marginLeft:10,
        marginRight:10
    },
    slide: {
  		flex: 1,
  		backgroundColor: 'transparent',
    },
    swipeText: {
        color: '#fff',
        fontSize: 18,
  		marginTop: 120,
  		marginLeft: 10,
  		width: 250,
  		lineHeight: 24,
  		fontWeight: 'bold',
    },
  	backgroundImage: {
  		flex: 1,
  		width: null,
  		height: null,
  		backgroundColor: 'transparent',
  		resizeMode: 'stretch',
  	},
    count: {
		width: 30,
		height: 30,
		textAlign:'center',
        color: '#787878',
		lineHeight: 23,
        backgroundColor:'transparent'
	},
    countView: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#fff',
		opacity: 0.9,
	}
});
