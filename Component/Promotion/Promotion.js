/**
 * Created by lee on 2017/8/21.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Promotion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>活动</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
});

module.exports = Promotion;