import {createStore, applyMiddleware} from 'redux'
import appReducer from './reducers'

const consoleMessages = store => next => action => {

    console.groupCollapsed(`Action: ${action.type}`);

    //Dispatch Triggered
    let result = next(action)

    console.log(store.getState())
    console.groupEnd();

    return result

}

export default applyMiddleware(consoleMessages)(createStore)(appReducer)