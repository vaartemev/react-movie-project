import {GET_MOVIE_DETAILS_BY_ID, FETCH_MOVIE_BY_ID_SUCCESS} from '../constants';

export const requestMovie = (id) => {
    return {
        type: GET_MOVIE_DETAILS_BY_ID,
        payload: {
            id
        }
    }
}

export const fetchMovieByIdSuccess = (movie) => {
    return {
        type: FETCH_MOVIE_BY_ID_SUCCESS,
        payload: {
            movie
        }
    }
}