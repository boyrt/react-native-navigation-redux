/**
 * Created by Administrator on 2018/3/15 0015
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

export default class ProfileScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'ProfileScreen',
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile Screen
                </Text>
                <Button title={'Back'} onPress={()=>this.props.navigation.goBack()}/>
                <Button title={'ThirdScreen'} onPress = {()=>this.props.navigation.navigate('ThirdScreen')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});
 