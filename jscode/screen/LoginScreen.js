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

import PropTypes from 'prop-types';

export default class LoginScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'LoginScreen',
    });

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Screen A
                </Text>
                <Text style={styles.welcome}>
                    This is great
                </Text>
                <Button
                    onPress={() => navigation.dispatch({ type: 'Login' })}
                    title="Log in"
                />
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
 