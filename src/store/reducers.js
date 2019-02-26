import {C} from '../constants'
import {combineReducers} from 'redux'

const allAppointments = (state=[], action) => {
    switch (action.type) {
        case C.ADD_APPOINTMENT:
            return [
                ...state,
                {
                    "id" : state.length,
                    "date" : action.payload.date,
                    "title" : action.payload.title,
                    "note" : action.payload.note,
                }
        ]

        case C.REMOVE_APPOINTMENT:
            return state.filter( item => item.id !== action.payload.id )
        
        // case C.SEARCH_APPOINTMENTS:
        //     return

        default:
            return state
    }
}


export default combineReducers({allAppointments})