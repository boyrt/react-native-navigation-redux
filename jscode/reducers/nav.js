import {NavigationActions} from 'react-navigation'
import {AppNavigator} from "../AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initiaNavState = AppNavigator.router.getStateForAction(secondAction,tempState);

function nav(state=initiaNavState,action){
    let nextState;
    switch (action.type){
        case 'Login':
            console.log('nav=====','Login')
            console.log('**************************')
            console.log('state=====',state)
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            )
            console.log('**************************')
            console.log('nextState=====',nextState)
            break;
        case 'Logout':
            console.log('nav=====','Logout')
            console.log('**************************')
            console.log('state=====',state)
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            console.log('**************************')
            console.log('nextState=====',nextState)
            break;
        case 'BackTwoScreen':
            console.log('nav=====','BackTwoScreen')
            console.log('**************************')
            console.log('state=====',state)
            const key = state.routes[state.index-1].key
            console.log('key=',key)
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.back({key:key}),
                state
            )
            console.log('**************************')
            console.log('nextState=====',nextState)
            break;
        default:
            console.log('nav=====','default')
            console.log('**************************')
            console.log('state=====',state)
            nextState = AppNavigator.router.getStateForAction(action, state);
            console.log('**************************')
            console.log('nextState=====',nextState)
            break;
    }
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default nav;