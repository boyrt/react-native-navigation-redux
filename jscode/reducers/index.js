import {combineReducers} from 'redux'
import nav from './nav'
import auth from './auth'
const AppReducers = combineReducers({
    nav,
    auth
})

export default AppReducers;