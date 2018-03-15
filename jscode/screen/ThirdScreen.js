/**
 * Created by Administrator on 2018/3/15 0015
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation'

class ThirdScreen extends Component {
    static  navigationOptions = ({ navigation, screenProps }) => ({
        headerTitle : 'ThirdScreen',
    });

    // static propTypes = {
    //     dispatch : PropTypes.func.isRequired,
    // }

    render() {
        // const {dispatch} = this.props.navigation; //这样也能获取到dispatch
        const { dispatch } = this.props;
        // const {toMainScreen} = this.props;
        return (
            <View style={styles.container}>
                <Text>返回MainScreen界面</Text>
                <Button title={'Back'} onPress = {()=>dispatch({type: 'BackTwoScreen'})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center'
    },
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    toMainScreen: () => dispatch({ type: 'BackTwoScreen' }),

});

//如果将export default connect(mapStateToProps,mapDispatchToProps)(ThirdScreen) 则 this.props.dispatch 是undefined
// export default connect(mapStateToProps,mapDispatchToProps)(ThirdScreen)
export default connect()(ThirdScreen)
