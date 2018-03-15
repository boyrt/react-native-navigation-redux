import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

class LoginStatusMessage extends React.Component {

    static propTypes = {
        isLoggedIn : PropTypes.bool.isRequired,
        dispatch : PropTypes.func.isRequired,
    }

    render() {
        const { isLoggedIn, dispatch } = this.props;
        if (!isLoggedIn) {
            return <Text>Please log in</Text>;
        }
        return (
            <View>
                <Text style={styles.welcome}>
                    {'You are "logged in" right now'}
                </Text>
                <Button
                    onPress={() =>
                        dispatch(NavigationActions.navigate({ routeName : 'Profile' }))}
                    title="Profile"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    welcome : {
        fontSize : 20,
        textAlign : 'center',
        margin : 10,
    },
})

const mapStateToProps = state=>({
    isLoggedIn:state.auth.isLoggedIn
})

export default connect(mapStateToProps)(LoginStatusMessage)
