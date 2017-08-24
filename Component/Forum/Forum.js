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
    WebView,
    TouchableOpacity
} from 'react-native';

var RequestURL = 'http://i.meituan.com/shoppingmall/smList?sid=@geodist:asc'
export default class Forum extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerLeft:(
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'white',marginLeft:15, fontSize: 16}} onPress={()=>{alert('前进')}}>后退</Text>
                <Text style={{color:'white',marginLeft:15, fontSize: 16}} onPress={()=>{alert('后退')}}>前进</Text>
            </View>

        ),
        headerRight:(
            <TouchableOpacity onPress={()=>{alert('写文章')}}>
                <Image style={{width: 20, height: 20, marginRight: 15}} source={{uri: 'send'}}/>
            </TouchableOpacity>

        )
    });

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref={'webView'}
                    automaticallyAdjustContentInsets={true}
                    style= {styles.webViewStyle}
                    source={{uri:RequestURL}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    webViewStyle:{
        flex:1,
        backgroundColor:'rgba(255,255,255,0.8)'
    }
});

module.exports = Forum;