import { GlobalContext } from '../context/GlobalState';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const MovieControls = ({movie, type}) => {
  const {removeMovieFromWatchList, addMovieToWatched, moveToWatchList, removeFromWatched} = useContext(GlobalContext);
  return (
    <div className="inner-card-controls">
      {type==='watchlist' && (
        <>
          <button 
            className="ctrl-btn" 
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-eye fa-fw far"></i>
          </button>
          <button 
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchList(movie.id)}
          >
            <i className="fa fa-fw fa-times"></i>
          </button>
        </>
      )}
      {type==='watched' && (
        <> 
          <button 
            className="ctrl-btn"
            onClick={() => moveToWatchList(movie)}  
          >
            <i className="fa-eye-slash fa-fw far"></i>
          </button>
          <button 
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}  
          >
            <i className="fa fa-fw fa-times"></i>
          </button>
        </>
      )}
    </div>
  )
}

MovieControls.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieControls
