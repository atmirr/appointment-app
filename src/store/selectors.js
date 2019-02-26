import {createSelector} from 'reselect'
import {get} from 'immutable'

const getAllAppointments = state => get(state, 'allAppointments')

const getQuery = state => get(state, 'query')

export const getVisibleAppointments = createSelector(
    getAllAppointments,
    getQuery,
    (appointment, query) => {
        return (!query) ?
            appointment :
            appointment.filter(item => get(item, 'title').toLowerCase().includes(query))
    }
)