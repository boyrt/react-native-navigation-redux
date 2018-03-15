import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';


class AuthButton extends React.Component{

    static propTypes ={
        isLoggedIn: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired,
        loginScreen: PropTypes.func.isRequired,
    }

    render(){
        const {isLoggedIn,logout,loginScreen} = this.props;

        return(
            <Button
                title = {isLoggedIn ? 'Log out' : 'Open Login Screen'}
                onPress = {isLoggedIn ? logout:loginScreen }
            />
        )
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'Logout' }),
    loginScreen: () =>
        dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps,mapDispatchToProps)(AuthButton)