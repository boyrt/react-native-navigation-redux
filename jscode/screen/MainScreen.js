/**
 * Created by Administrator on 2018/3/15 0015
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import AuthButton from '../component/AuthButton'
import LoginStatusMessage from '../component/LoginStatusMessage'

export default class MainScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'MainScreen',
    });

    render() {
        return (
            <View style={styles.container}>
                <LoginStatusMessage />
                <AuthButton />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
 