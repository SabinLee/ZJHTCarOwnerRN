/**
 * Created by lee on 2017/8/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation'
var Home = require('../Home/Home')
var Promotion = require('../Promotion/Promotion')
var Forum = require('../Forum/Forum')
var CustomService = require('../CustomService/CustomService')
var Mine = require('../Mine/Mine')
var HomeDetail = require('../Home/HomeDetail')

const Tabbar = TabNavigator({
    Home:{
        screen:Home,
        navigationOptions: ()=> TabOptions('首页',{uri: 'footbt1'},{uri: 'footbt11'},'中经油马'),
    },
    Promotion:{
        screen:Promotion,
        navigationOptions: ()=> TabOptions('活动',{uri: 'footbt2'},{uri: 'footbt22'},'活动'),
    },
    Forum:{
        screen:Forum,
        navigationOptions: ()=> TabOptions('社区',{uri: 'footbt3'},{uri: 'footbt33'},'社区'),
    },
    CustomService:{
        screen:CustomService,
        navigationOptions: ()=> TabOptions('客服',{uri: 'footbt4'},{uri: 'footbt44'},'客服'),
    },
    Mine:{
        screen:Mine,
        navigationOptions: ()=> TabOptions('我的',{uri: 'footbt5'},{uri: 'footbt55'},'个人中心'),
    },
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'rgba(188,0,0,1)', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'gray', // label和icon的前景色 不活跃状态下(未选中)。
        activeBackgroundColor:'white', //label和icon的背景色 活跃状态下（选中） 。
        inactiveBackgroundColor:'white', // label和icon的背景色 不活跃状态下（未选中）。
        showLabel:true, // 是否显示label，默认开启。
        labelStyle: {fontSize: 12, marginBottom: 4},
        // style:{}, // tabbar的样式。
        // labelStyle:{}, //label的样式。


        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }

});

// 初始化StackNavigator
const Navbar = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    Tabbar:{
        screen:Tabbar,
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    HomeDetail:{
        screen:HomeDetail
    }
},{

});

const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            <Image
                source={!focused ? normalImage : selectedImage}
                style={{height:25,width:25 }}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:18, color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'rgba(188,0,0,1)'};
    const tabBarVisible = true;
    // const header = null;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

module.exports = Navbar;