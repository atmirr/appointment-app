import {C} from './constants'

export const addAppointment = (date, title, note) => (
    {
        type: C.ADD_APPOINTMENT,
        payload: {
            date,
            title,
            note
        }
    }
)

export const setQuery = (query) => (
    {
        type: C.SET_QUERY,
        payload: query
    }
)

//Fetch Public Holidays
export const fetchHolidays = () => (
    {
        type: C.FETCH_HOLIDAYS,
    }
)

export const fetchHolidaysSuccess = (holidays) => (
    {
        type: C.FETCH_HOLIDAYS_SUCCESS,
        payload: holidays
    }
)

export const fetchHolidaysFailure = (message) => (
    {
        type: C.FETCH_HOLIDAYS_FAILURE,
        payload: message
    }
)
