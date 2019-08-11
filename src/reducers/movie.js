import {
    FETCH_MOVIE_BY_ID_SUCCESS
} from '../constants';

export const movie = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MOVIE_BY_ID_SUCCESS: {
            return { ...state, movie: action.payload.movie };
        }
        default:
            return state;
    }
};