import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { useContext } from "react";

const WatchList = () => {
  const { watchList } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchList.length} {watchList.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        
        {watchList.length > 0 ? (
          <div className="movie-grid">
            {watchList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your watchlist</h2>
        )}        
      </div>
    </div>
  )
}

export default WatchList
