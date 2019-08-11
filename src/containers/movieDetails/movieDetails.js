import { MovieInfo } from '../../components/movieInfo/movieInfo';
import { requestMovie } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        movie: state.movie.movie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: (id) => {
            dispatch(requestMovie(id));
        }
    };
};

export const MovieDetails = connect(mapStateToProps, mapDispatchToProps)(MovieInfo)