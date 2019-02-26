import {C} from '../constants'
import { fetchHolidaysSuccess, fetchHolidaysFailure } from '../actions'
import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, catchError, switchMap } from 'rxjs/operators'

const url = 'https://holidayapi.pl/v1/holidays?country=CA&year=2019'

const fetchHolidaysEpic = action$ => action$.pipe(
    ofType(C.FETCH_HOLIDAYS),
    switchMap(() => {
        return ajax.getJSON(url).pipe(
            map(data => data.holidays),
            map(item => Object.values(item)),
            map(holidays => holidays.map(holiday => holiday.reduce(item => ({
                name: item.name,
                country: item.country,
                date: item.date
            })))),
            map(holidays => fetchHolidaysSuccess(holidays)),
            catchError(error => of(fetchHolidaysFailure(error.message)))
        )
    })
);

export const rootEpic = combineEpics(fetchHolidaysEpic);