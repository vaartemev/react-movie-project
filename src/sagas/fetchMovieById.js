import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchMovieByIdSuccess } from '../actions';

import { GET_MOVIE_DETAILS_BY_ID } from '../constants';

import { request } from '../utils/request';
import { API_URL } from '../constants';

export function* fetchMovieById({payload: {id}}){
    const url = `${API_URL}${id}`;
    const movie = yield call(request, url);
    yield put(fetchMovieByIdSuccess(movie));
    
}

export function* watchFetchMovieById(){
    yield takeEvery(GET_MOVIE_DETAILS_BY_ID, fetchMovieById)
}