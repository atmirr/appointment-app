import {C} from '../constants'
import {combineReducers} from 'redux-immutable'
import {Map, List, get, getIn} from 'immutable'

const allAppointments = (state=List([]), action) => {
    switch (action.type) {

        case C.ADD_APPOINTMENT:
            return state.push(Map({
                id : state.size,
                date : getIn(action, ['payload', 'date']),
                title : getIn(action, ['payload', 'title']),
                note : getIn(action, ['payload', 'note']),
            }))

        case C.REMOVE_APPOINTMENT:
            return state.filter( item => item.id !== getIn(action, ['payload', 'id']) )

        default:
            return state
    }
}

const query = (state=null, action) => {
    switch (action.type) {

        case C.SET_QUERY:
            return get(action, 'payload')

        default:
            return state
    }
}

const allHolidays = (state=Map({}), action) => {
    switch (action.type) {
        case C.FETCH_HOLIDAYS:
            return Map({
                holidays: get(state, 'holidays'),
                isLoading: true,
                error: null
            })

        case C.FETCH_HOLIDAYS_SUCCESS:
            return Map({
                holidays: get(action, 'payload'),
                isLoading: false,
                error: null
            })

        case C.FETCH_HOLIDAYS_FAILURE:
            return Map({
                holidays: List([]),
                isLoading: false,
                error: get(action, 'payload')
            })

        default:
            return state;
    }
}

export default combineReducers({allAppointments, query, allHolidays})