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
    Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window')

import Swiper from 'react-native-swiper'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Swiper style={styles.wrapper}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                            top: 0, alignItems: 'center'
                        }} loop>
                        <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://183.232.43.134:9092/Public/slideImg/20170823/1503456555_21530.jpg'}} />
                        <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://183.232.43.134:9092/Public/slideImg/20170823/1503456555_21530.jpg'}} />
                        <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://183.232.43.134:9092/Public/slideImg/20170823/1503456555_21530.jpg'}} />
                        <Image resizeMode='stretch' style={styles.image} source={{uri: 'http://183.232.43.134:9092/Public/slideImg/20170823/1503456555_21530.jpg'}} />
                </Swiper>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1
    },

    wrapper: {
    },

    image: {
        width,
        height: 120
    }
}

module.exports = Home;