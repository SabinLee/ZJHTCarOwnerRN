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
    TouchableOpacity
} from 'react-native';

export default class CommonCell extends Component {
    static get defaultProps(){
        return{
            title: '',
            iconSource: {}
        };
    }
    //
    // getInitialState(){
    //     return{
    //
    //     }
    //
    // },

    render() {
        return (
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={()=>{alert(this.props.title)}}>
                <Image style={{width: 15, height: 15, marginLeft: 10}} source={this.props.iconSource}/>
                <Text style={{marginLeft: 10, fontSize: 14}}>{this.props.title}</Text>
                <Image style={{width: 10, height: 10, position: 'absolute', right: 10}} source={{uri: 'arrowBack'}}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#e5e5e5'
        marginBottom: 0.5

    },
});

module.exports = CommonCell;