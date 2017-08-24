/**
 * Created by lee on 2017/8/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import CommonCell from './CommonCell'

var {width,height} = require('Dimensions').get('window')
// var Dimensions = require('Dimensions')
// var kWidth = Dimensions.get('window').width
// var kHeight = Dimensions.get('window').height


export default class Mine extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerRight:(
            <Text style={{color:'white',marginRight:20, fontSize: 16}} onPress={()=>{alert('已注销')}}>注销</Text>
        ),
    });

    render() {
        return (
            <ScrollView>
                <View style={styles.topViewStyle}>
                    <View style={styles.topHeaderViewStyle}>
                        <Image source={{uri: 'DefaultHeader'}} style={styles.headStyle}/>
                    </View>
                    <View style={styles.topHeaderViewStyle}>
                        <View><Text style={{marginBottom: 10, fontSize: 16}}>未设置</Text></View>
                        <View><Text style={{marginBottom: 10, fontSize: 13, color: 'gray'}}>手机号  170****9427</Text></View>
                        <View><Text style={{fontSize: 13, color: 'gray'}}>车牌号  未提交</Text></View>
                    </View>
                    <TouchableOpacity style={styles.topBottomViewStyle} onPress={()=>{alert('我的订单')}}>
                        <Image source={{uri: 'grzjicon2'}} style={{width: 23, height: 20}}/>
                        <Text style={{marginTop: 7, color: '#fcc900', fontSize: 12}}>我的订单</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topBottomViewStyle} onPress={()=>{alert('我的电子券')}}>
                        <Image source={{uri: 'grzjicon3'}} style={{width: 23, height: 20}}/>
                        <Text style={{marginTop: 7, color: '#fcc900', fontSize: 12}}>我的电子券</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topBottomViewStyle} onPress={()=>{alert('汇通钱包')}}>
                        <Image source={{uri: 'grzjicon4'}} style={{width: 23, height: 20}}/>
                        <Text style={{marginTop: 7, color: '#fcc900', fontSize: 12}}>汇通钱包</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleViewStyle}>
                    <CommonCell iconSource={{uri: 'grzjicon5'}} title='中经汇通卡激活'/>
                    <CommonCell iconSource={{uri: 'grzjicon11'}} title='中经汇通卡绑定'/>
                    <CommonCell iconSource={{uri: 'shopCarJT'}} title='我的购物车'/>
                    <CommonCell iconSource={{uri: 'grzjicon7'}} title='消息中心'/>
                    <CommonCell iconSource={{uri: 'redPacket'}} title='我的红包'/>
                </View>
                <View>
                    <CommonCell iconSource={{uri: 'grzjicon2'}} title='意见与反馈'/>
                    <CommonCell iconSource={{uri: 'grzjicon8'}} title='关于中经油马'/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topViewStyle: {
        height: 180,
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    },

    topHeaderViewStyle: {
        width: width * 0.5,
        height: 110,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    headStyle: {
        height: 70,
        width: 70,
        borderRadius: 35,
        position: 'absolute',
        right: 20
    },
    topBottomViewStyle: {
        width: width / 3,
        height: 70,
        borderWidth: 1,
        borderColor: '#fcc900',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    middleViewStyle: {
        marginBottom: 10
    }

});

module.exports = Mine;