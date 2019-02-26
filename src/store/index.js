import {createStore, applyMiddleware, compose} from 'redux'
import appReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import {Map, List} from 'immutable'

const initialStates = Map({
    allAppointments : List([
        Map({
            id: 0,
            date: "2019/2/5",
            title: "Test appointment",
            note: "It is a test note!"
        }),
        Map({
            id: 1,
            date: "2018/2/5",
            title: "Test appointment 2",
            note: "It is a test note 2!"
        })
    ]),
    query: null,
    allHolidays: Map({
        holidays: List([]),
        isLoading: true,
        error: null
    })
})

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    appReducer,
    initialStates,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic)

export default store